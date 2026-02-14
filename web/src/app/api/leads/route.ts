import { NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";

const leadSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10),
    company: z.string().optional(),
    interest: z.enum(["Quero usar a solução", "Quero ser parceiro", "Quero investir", "Quero imprensa"]),
    message: z.string().min(10),
});

// Map interest string to Enum value if needed or keep string
// In schema, I used LeadInterest enum with values like CUSTOMER, PARTNER, INVESTOR, PRESS.
// I need shorter mapping.

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

        const lead = await prisma.lead.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                phone: validatedData.phone,
                company: validatedData.company,
                interest: mappedInterest,
                message: validatedData.message,
                source: "Site Form",
                status: "NEW", // Default in schema but explicit here for clarity
            },
        });

        return NextResponse.json({ success: true, leadId: lead.id }, { status: 201 });
    } catch (error) {
        console.error("Error creating lead:", error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: "Validation error", details: error.issues }, { status: 400 });
        }
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
