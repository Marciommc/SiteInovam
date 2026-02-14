import { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, ShieldCheck, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Investidores | Inovam",
    description: "Oportunidades de investimento em startups deep tech da Amazônia.",
};

export default function InvestidoresPage() {
    return (
        <div className="container py-24">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Investidores</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Plataformas B2B com IA, automação e compliance — feitas para escalar com governança e impacto mensurável.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="#contato">Solicitar Deck</Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="#contato">Agendar Reunião</Link>
                        </Button>
                    </div>
                </div>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="p-6 border bg-card rounded-xl">
                        <TrendingUp className="h-10 w-10 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Mercado Real</h3>
                        <p className="text-muted-foreground">Atuamos em setores com dor latente e demandas reprimidas (Locação Corporativa e Construção Civil).</p>
                    </div>
                    <div className="p-6 border bg-card rounded-xl">
                        <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Defensibilidade</h3>
                        <p className="text-muted-foreground">Tecnologia proprietária, algoritmos de IA e forte camada de compliance regulatório.</p>
                    </div>
                    <div className="p-6 border bg-card rounded-xl">
                        <PieChart className="h-10 w-10 text-primary mb-4" />
                        <h3 className="font-bold text-lg mb-2">Validação</h3>
                        <p className="text-muted-foreground">Projetos aprovados em editais concorridos (Tecnova III, PPI 4.0) e inserção no ecossistema.</p>
                    </div>
                </section>

                <section className="bg-muted/30 rounded-2xl p-8 mb-20" id="contato">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold">Solicite o material para investidores</h2>
                        <p className="text-muted-foreground">Preencha para receber o One-pager e Deck institucional.</p>
                    </div>
                    {/* Placeholder form integration */}
                    <div className="flex justify-center">
                        <Button asChild size="lg" className="w-full md:w-auto">
                            <Link href="/contato">Ir para Formulário de Contato</Link>
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    )
}
