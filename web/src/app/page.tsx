import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-20 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-6">
              Tecnologia que transforma mercados <br className="hidden sm:inline" />
              na Amazônia e no Brasil.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              A Inovam desenvolve plataformas B2B com <strong className="text-primary font-semibold">IA, automação e compliance</strong>, conectando inovação à economia real — com projetos aprovados e validados em programas estratégicos.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link href="/projetos">
                  Conhecer projetos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
                <Link href="/contato">
                  Seja parceiro / investidor
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />
      </section>

      {/* Solutions Section */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-foreground mb-6">
                Soluções escaláveis para <br />
                desafios reais.
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Construímos plataformas digitais de alto impacto para setores que exigem eficiência, rastreabilidade e confiança. Nosso foco é **B2B**, com automação ponta-a-ponta e arquitetura pronta para crescimento.
              </p>
              <ul className="space-y-4">
                {[
                  "IA aplicada (recomendação, visão computacional)",
                  "Compliance e segurança by design",
                  "Cloud e integrações via APIs",
                  "Produto orientado a métricas (KPIs)"
                ].map((item) => (
                  <li key={item} className="flex items-center text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-secondary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border overflow-hidden flex items-center justify-center">
              <img
                src="/images/home-hero.png"
                alt="Inovam Platform Architecture"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 lg:px-8 bg-accent/5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter text-foreground">
              Projetos em Destaque
            </h2>
            <p className="mt-4 text-muted-foreground">
              Iniciativas validadas com inserção no ecossistema de inovação.
            </p>
          </div>
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
      </section>



      {/* CTA Section */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-primary/10 border border-primary/20 px-6 py-16 sm:px-16 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter text-foreground">
              Vamos construir o próximo case juntos?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Se você busca uma solução digital robusta, parceria estratégica ou oportunidade de investimento.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Button asChild size="lg">
              <Link href="/contato">Falar com a Inovam</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/investidores">Investidores</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
