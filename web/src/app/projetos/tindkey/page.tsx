import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "TindKey | Inovam",
    description: "Plataforma que conecta obras a profissionais, com orçamento automatizado.",
};

export default function TindKeyPage() {
    return (
        <div className="container py-24">
            <div className="max-w-4xl mx-auto">
                <Link href="/projetos" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Projetos
                </Link>

                <div className="flex items-center gap-4 mb-6">
                    <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary ring-1 ring-inset ring-secondary/20">
                        PPI 4.0
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">TindKey</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Plataforma que conecta donos de obras a profissionais, com orçamento automatizado e operação digital.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">O que é</h2>
                            <p className="text-muted-foreground">
                                Uma experiência “tipo iFood” para construção civil: donos de obra solicitam, recebem orçamento automatizado, contratam, pagam por marcos e acompanham execução.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-6">Diferenciais</h2>
                            <ul className="space-y-3">
                                {[
                                    "Orçamento automatizado (base técnica)",
                                    "Contratos digitais e pagamentos escalonados",
                                    "Marketplace e reputação",
                                    "Relatórios e controle de custos"
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
                            <h3 className="font-bold text-lg mb-4">Próximos passos</h3>
                            <div className="space-y-4">
                                <Button asChild className="w-full" variant="secondary">
                                    <Link href="https://tindkey.com" target="_blank" rel="noopener noreferrer">
                                        Acessar Site Oficial
                                    </Link>
                                </Button>
                                <Button asChild className="w-full">
                                    <Link href="/contato">Entrar na lista de espera</Link>
                                </Button>
                                <Button asChild variant="outline" className="w-full">
                                    <Link href="/contato">Seja parceiro</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
