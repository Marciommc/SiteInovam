"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { CheckCircle2, Loader2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres."),
    email: z.string().email("E-mail inválido."),
    phone: z.string().min(10, "Telefone inválido."),
    company: z.string().optional(),
    interest: z.enum(["Quero usar a solução", "Quero ser parceiro", "Quero investir", "Quero imprensa"]),
    message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres."),
})

type FormValues = z.infer<typeof formSchema>

export default function ContatoPage() {
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            interest: "Quero usar a solução",
        },
    })

    async function onSubmit(data: FormValues) {
        setIsSubmitting(true)
        // Simular envio para API
        await new Promise((resolve) => setTimeout(resolve, 2000))
        console.log(data)
        setIsSubmitting(false)
        setIsSuccess(true)
        reset()
    }

    return (
        <div className="container py-24">
            <div className="max-w-xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tighter mb-4">Fale com a Inovam</h1>
                    <p className="text-xl text-muted-foreground">
                        Escolha seu objetivo e receba um retorno com direcionamento e proposta.
                    </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
                    {isSuccess ? (
                        <div className="text-center py-12">
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 mb-6">
                                <CheckCircle2 className="h-8 w-8 text-secondary" />
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Mensagem enviada!</h2>
                            <p className="text-muted-foreground mb-8">
                                Obrigado pelo contato. Nossa equipe retornará em breve.
                            </p>
                            <Button onClick={() => setIsSuccess(false)} variant="outline">
                                Enviar nova mensagem
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="interest">Qual seu interesse?</Label>
                                <select
                                    id="interest"
                                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    {...register("interest")}
                                >
                                    <option value="Quero usar a solução">Quero usar a solução</option>
                                    <option value="Quero ser parceiro">Quero ser parceiro</option>
                                    <option value="Quero investir">Quero investir</option>
                                    <option value="Quero imprensa">Quero imprensa</option>
                                </select>
                                {errors.interest && (
                                    <p className="text-sm text-destructive">{errors.interest.message}</p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nome completo</Label>
                                    <Input id="name" placeholder="Seu nome" {...register("name")} />
                                    {errors.name && (
                                        <p className="text-sm text-destructive">{errors.name.message}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Telefone / WhatsApp</Label>
                                    <Input id="phone" placeholder="(92) 99999-9999" {...register("phone")} />
                                    {errors.phone && (
                                        <p className="text-sm text-destructive">{errors.phone.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">E-mail corporativo</Label>
                                <Input id="email" type="email" placeholder="nome@empresa.com" {...register("email")} />
                                {errors.email && (
                                    <p className="text-sm text-destructive">{errors.email.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="company">Empresa (Opcional)</Label>
                                <Input id="company" placeholder="Nome da sua empresa" {...register("company")} />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Mensagem</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Conte um pouco sobre sua necessidade..."
                                    className="min-h-[120px]"
                                    {...register("message")}
                                />
                                {errors.message && (
                                    <p className="text-sm text-destructive">{errors.message.message}</p>
                                )}
                            </div>

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Enviar Mensagem
                                        <Send className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}
