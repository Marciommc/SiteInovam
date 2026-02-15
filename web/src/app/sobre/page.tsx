import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre a Inovam | Deep Tech Amazônica",
    description: "Conheça a história, missão e os fundadores da Inovam.",
};

export default function SobrePage() {
    return (
        <div className="container py-24">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tighter mb-8">Sobre a Inovam</h1>

                <div className="prose prose-invert max-w-none">
                    <p className="lead text-xl text-muted-foreground mb-8">
                        Inovam — Inovações Tecnológicas da Amazônia.
                    </p>

                    <p>
                        A Inovam nasceu com o propósito de usar tecnologia para transformar processos empresariais, tornando operações mais eficientes, seguras e sustentáveis. Evoluímos de serviços técnicos e desenvolvimento sob demanda para uma atuação sólida em plataformas escaláveis, com foco em <strong>IA, automação e digitalização</strong>.
                    </p>

                    <h2 className="text-2xl font-bold mt-12 mb-6">Destaques Institucionais</h2>
                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        <li>Base em Manaus/AM — conexão com o ecossistema amazônico de inovação.</li>
                        <li>Foco em produtos e plataformas B2B.</li>
                        <li>Construção de soluções com governança técnica e escalabilidade.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mt-12 mb-8">Liderança</h2>
                    <div className="mb-8">
                        <img
                            src="/images/team/team-main.webp"
                            alt="Equipe Inovam"
                            className="rounded-xl shadow-lg w-full object-cover aspect-video"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                        {[
                            { name: "Jhonatas Araújo", role: "CEO", bio: "Empreendedor e gestor com atuação em inovação e desenvolvimento de negócios." },
                            { name: "Leonardo Costa", role: "COO", bio: "Responsável pela operação, finanças e estruturação de processos. Doutorando em IA." },
                            { name: "Márcio Costa (Archon)", role: "CTO", bio: "Arquiteto de software, estrategista de IA e tecnologia." }
                        ].map((person) => (
                            <div key={person.name} className="p-6 rounded-lg border bg-card">
                                <h3 className="font-bold text-lg">{person.name}</h3>
                                <p className="text-primary text-sm mb-2">{person.role}</p>
                                <p className="text-sm text-muted-foreground">{person.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
