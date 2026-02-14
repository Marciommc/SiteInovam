import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ecossistema | Inovam",
    description: "Parcerias estratégicas, programas de inovação e validação de mercado.",
};

export default function EcossistemaPage() {
    return (
        <div className="container py-24">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tighter mb-4">Ecossistema</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    A Inovam atua conectada a hubs, aceleradoras, ICTs e programas estratégicos, ampliando validação, acesso a mercado e governança de execução.
                </p>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">Programas de Inovação</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 border bg-card rounded-xl">
                            <h3 className="font-bold text-lg mb-2">Finep Tecnova III</h3>
                            <p className="text-muted-foreground">Projeto aprovado para desenvolvimento da plataforma 247 Locação, com foco em deep tech e IA.</p>
                        </div>
                        <div className="p-6 border bg-card rounded-xl">
                            <h3 className="font-bold text-lg mb-2">PPI 4.0</h3>
                            <p className="text-muted-foreground">Aprovação no Programa Prioritário de Informática para o projeto TindKey, gerido pelo CITS.</p>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 border-b border-border pb-2">Eventos e Conexões</h2>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 text-primary font-bold px-3 py-1 rounded text-sm">2024/2025</div>
                            <div>
                                <h3 className="font-bold">Distrito Summit (DSX)</h3>
                                <p className="text-muted-foreground">Participação confirmada no maior evento de startups e inovação corporativa da América Latina.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
