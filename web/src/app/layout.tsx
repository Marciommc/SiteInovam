import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inovam | Deep Tech da Amazônia",
  description: "Desenvolvemos plataformas digitais B2B com IA, automação e compliance. Projetos aprovados Tecnova III e PPI 4.0.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased selection:bg-primary/20 selection:text-primary")}>
        <Navbar />
        <main className="flex-1 pt-24 min-h-[calc(100vh-theme(spacing.24))]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
