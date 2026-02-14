import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin | Inovam",
    description: "Área administrativa",
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-muted/20">
            {/* Placeholder simples para layout admin */}
            {children}
        </div>
    )
}
