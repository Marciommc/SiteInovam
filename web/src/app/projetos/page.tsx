import { Metadata } from "next";
import { ProjectCard } from "@/components/project/ProjectCard";

export const metadata: Metadata = {
    title: "Projetos | Inovam",
    description: "Conheça os projetos Deep Tech desenvolvidos pela Inovam.",
};

export default function ProjetosPage() {
    return (
        <div className="container py-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tighter mb-4">Nossos Projetos</h1>
                <p className="text-muted-foreground text-xl mb-12">
                    Nossos projetos unem tecnologia avançada e execução estruturada — com foco em impacto mensurável, aderência regulatória e crescimento sustentável.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ProjectCard
                        title="247 Locação"
                        description="Plataforma Integrada de Locação de Bens Móveis Corporativos com Inteligência Artificial. Solução completa para gestão de ativos e contratos B2B."
                        tags={["IA", "Visão Computacional", "B2B", "SaaS"]}
                        href="/projetos/247-locacao"
                        status="Tecnova III"
                    />
                    <ProjectCard
                        title="TindKey"
                        description="Plataforma de conexão e gestão para construção civil. Orçamentos automatizados, contratos digitais e marketplace de serviços."
                        tags={["Marketplace", "Construção", "Fintech", "PPI 4.0"]}
                        href="/projetos/tindkey"
                        status="PPI 4.0"
                    />
                </div>
            </div>
        </div>
    )
}
