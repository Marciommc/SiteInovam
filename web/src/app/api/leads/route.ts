import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

const leadSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    company: z.string().optional(),
    interest: z.enum(["Quero usar a solução", "Quero ser parceiro", "Quero investir", "Quero imprensa"]),
    message: z.string().min(10),
});

const interestMap: Record<string, "CUSTOMER" | "PARTNER" | "INVESTOR" | "PRESS"> = {
    "Quero usar a solução": "CUSTOMER",
    "Quero ser parceiro": "PARTNER",
    "Quero investir": "INVESTOR",
    "Quero imprensa": "PRESS",
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = leadSchema.parse(body);

        const mappedInterest = interestMap[validatedData.interest];

        // 1. Salvar no Banco de Dados
        const lead = await prisma.lead.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                phone: validatedData.phone,
                company: validatedData.company,
                interest: mappedInterest,
                message: validatedData.message,
                source: "Site Form",
                status: "NEW",
            },
        });

        // 2. Enviar Email de Notificação
        if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
            try {
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST,
                    port: Number(process.env.SMTP_PORT) || 465,
                    secure: true, // true for 465, false for other ports
                    auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                    },
                });

                await transporter.sendMail({
                    from: `"Site Inovam" <${process.env.SMTP_USER}>`,
                    to: "inovam@inovam.online", 
                    subject: `🚀 Novo Lead: ${validatedData.name} - ${mappedInterest}`,
                    text: `
                        Novo Lead Recebido pelo Site!

                        Nome: ${validatedData.name}
                        Email: ${validatedData.email}
                        Telefone: ${validatedData.phone}
                        Empresa: ${validatedData.company || "N/A"}
                        Interesse: ${validatedData.interest}
                        
                        Mensagem:
                        ${validatedData.message}
                    `,
                    html: `
                        <div style="font-family: Arial, sans-serif; color: #333;">
                            <h2 style="color: #0070f3;">🚀 Novo Lead Recebido</h2>
                            <p>Um novo contato foi registrado através do site Inovam.</p>
                            
                            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                            
                            <p><strong>Nome:</strong> ${validatedData.name}</p>
                            <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
                            <p><strong>Telefone:</strong> ${validatedData.phone}</p>
                            <p><strong>Empresa:</strong> ${validatedData.company || "N/A"}</p>
                            <p><strong>Interesse:</strong> <span style="background: #eef; padding: 2px 6px; border-radius: 4px;">${validatedData.interest}</span></p>
                            
                            <h3 style="margin-top: 20px;">Mensagem:</h3>
                            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #0070f3;">
                                ${validatedData.message.replace(/\n/g, '<br>')}
                            </div>
                            
                            <p style="margin-top: 30px; font-size: 12px; color: #888;">
                                Este email foi enviado automaticamente pelo sistema do Site Inovam.
                            </p>
                        </div>
                    `,
                });
                console.log("Email enviado com sucesso para inovam@inovam.online");
            } catch (emailError) {
                console.error("Erro ao enviar email:", emailError);
                // Não falha a requisição se o email falhar, apenas loga
            }
        } else {
            console.warn("SMTP não configurado. Email não enviado.");
        }

        return NextResponse.json({ success: true, leadId: lead.id }, { status: 201 });
    } catch (error) {
        console.error("Error creating lead:", error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: "Validation error", details: error.issues }, { status: 400 });
        }
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
