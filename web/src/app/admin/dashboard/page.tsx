import prisma from "@/lib/prisma";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// Force dynamic rendering to ensure fresh data
export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
    // Busca dados reais do banco
    const totalLeads = await prisma.lead.count();
    const activeProjects = await prisma.project.count({
        where: { status: "PUBLISHED" }
    });

    const recentLeads = await prisma.lead.findMany({
        orderBy: { created_at: "desc" },
        take: 5
    });

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Dashboard Administrativo</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">Total Leads</h3>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                        >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                    </div>
                    <div className="text-2xl font-bold">{totalLeads}</div>
                    <p className="text-xs text-muted-foreground">Contatos recebidos pelo site</p>
                </div>
                <div className="rounded-xl border bg-card text-card-foreground shadow p-6">
                    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <h3 className="tracking-tight text-sm font-medium">Projetos Ativos</h3>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="h-4 w-4 text-muted-foreground"
                        >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <div className="text-2xl font-bold">{activeProjects}</div>
                    <p className="text-xs text-muted-foreground">Projetos publicados no portfolio</p>
                </div>
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Leads Recentes</h2>
                <div className="rounded-md border bg-card">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Data</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Nome</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Email</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Empresa</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Interesse</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {recentLeads.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="p-4 text-center text-muted-foreground">Nenhum lead encontrado ainda.</td>
                                    </tr>
                                ) : (
                                    recentLeads.map((lead) => (
                                        <tr key={lead.id} className="border-b transition-colors hover:bg-muted/50">
                                            <td className="p-4 align-middle">{format(new Date(lead.created_at), "dd/MM/yyyy HH:mm", { locale: ptBR })}</td>
                                            <td className="p-4 align-middle font-medium">{lead.name}</td>
                                            <td className="p-4 align-middle">{lead.email}</td>
                                            <td className="p-4 align-middle">{lead.company || "-"}</td>
                                            <td className="p-4 align-middle">
                                                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                                                    {lead.interest}
                                                </span>
                                            </td>
                                            <td className="p-4 align-middle">{lead.status}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
