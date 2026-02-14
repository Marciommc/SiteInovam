import { Metadata } from "next";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Imprensa | Inovam",
    description: "Press kit, releases e materiais oficiais da Inovam.",
};

export default function ImprensaPage() {
    return (
        <div className="container py-24">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tighter mb-4">Imprensa</h1>
                <p className="text-xl text-muted-foreground mb-12">
                    Releases oficiais, boilerplates e assets de marca para jornalistas e criadores de conteúdo.
                </p>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">Assets para Download</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold">Logo Oficial (Kit)</h3>
                                <p className="text-sm text-muted-foreground">PNG, SVG, Monocromático</p>
                            </div>
                            <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="border rounded-lg p-4 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold">Media Kit (Fotos)</h3>
                                <p className="text-sm text-muted-foreground">Sócios, escritório</p>
                            </div>
                            <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-6">Últimos Releases</h2>
                    <div className="space-y-4">
                        <div className="border-b pb-4">
                            <span className="text-xs text-muted-foreground uppercase tracking-wide">Fevereiro 2026</span>
                            <h3 className="text-lg font-bold mt-1 hover:text-primary cursor-pointer">Startup amazônica lança plataforma de locação inteligente com IA</h3>
                            <p className="text-muted-foreground text-sm mt-2">Lançamento oficial da 247 Locação com aporte Finep Tecnova III.</p>
                        </div>
                        <div className="border-b pb-4">
                            <span className="text-xs text-muted-foreground uppercase tracking-wide">Janeiro 2026</span>
                            <h3 className="text-lg font-bold mt-1 hover:text-primary cursor-pointer">TindKey: a digitalização da construção civil</h3>
                            <p className="text-muted-foreground text-sm mt-2">Projeto aprovado no PPI 4.0 visa transformar canteiros de obra.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
