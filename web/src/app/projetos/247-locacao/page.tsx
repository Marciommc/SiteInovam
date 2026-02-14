import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "247 Locação | Inovam",
    description: "Plataforma B2B para locação inteligente de bens móveis corporativos com IA.",
};

export default function Project247Page() {
    return (
        <div className="container py-24">
            <div className="max-w-4xl mx-auto">
                <Link href="/projetos" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Projetos
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary ring-1 ring-inset ring-secondary/20">
                        Tecnova III
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">247 Locação</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Plataforma B2B para locação inteligente de bens móveis corporativos com IA, automação e compliance.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Dor que resolve</h2>
                            <p className="text-muted-foreground">
                                O mercado é fragmentado e burocrático: encontrar fornecedor confiável, negociar, contratar e garantir segurança jurídica custa tempo e dinheiro. Ao mesmo tempo, empresas possuem ativos ociosos sem canal eficiente de monetização.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Proposta de Valor</h2>
                            <p className="text-muted-foreground">
                                A 247 Locação conecta locadores e locatários com uma jornada digital completa: busca, match, contrato digital, pagamento e acompanhamento.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">Diferenciais Tecnológicos</h2>
                            <ul className="space-y-3">
                                {[
                                    "Recomendação inteligente (ML)",
                                    "Cadastro assistido (visão computacional)",
                                    "Contratos e rastreabilidade",
                                    "Segurança e conformidade (LGPD)",
                                    "Arquitetura escalável em cloud"
                                ].map(item => (
                                    <li key={item} className="flex items-center text-foreground">
                                        <CheckCircle2 className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className="md:col-span-1">
                        <div className="bg-card border border-border rounded-xl p-6 sticky top-32">
                            <h3 className="font-bold text-lg mb-4">Interessado?</h3>
                            <div className="space-y-4">
                                <Button asChild className="w-full">
                                    <Link href="/contato">Solicitar Apresentação</Link>
                                </Button>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/contato">Ser parceiro piloto</Link>
                                </Button>
                                <Button asChild variant="ghost" className="w-full">
                                    <Link href="/investidores">Quero investir</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
