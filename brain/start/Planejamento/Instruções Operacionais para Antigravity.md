Perfeito. Abaixo vai um **pacote completo (Markdown)** para o Antigravity já produzir o site **ultra profissional**: **copy pronto por página**, **identidade visual**, **arquitetura backend**, **modelo de banco**, **área administrativa**, **página de investidores**, além do padrão **/brain/logs** e **/docs**.

> Baseado nos materiais oficiais do 247 Locação (Tecnova III / FAPEAM) e no documento técnico do MVP.  

---

# 0) Instruções Operacionais para Antigravity (obrigatórias)

## 0.1 Estrutura de pastas

```
/brain              (NÃO versionar)
  /logs
    2026-02-14.md
    2026-02-15.md

/docs               (versionar no GitHub, se achar necessário)
  arquitetura.md
  banco-de-dados.md
  identidade-visual.md
  copywriting-site.md
```

## 0.2 Regras do /brain/logs

* 1 arquivo por dia (YYYY-MM-DD.md)
* Conteúdo mínimo:

  * Implementado (checklist)
  * Decisões (design/infra/código)
  * Pendências (próximos passos)
  * Links internos (arquivos editados)

**Template do log**

```markdown
# Log 2026-02-14

## Implementado
- [x] Home (Hero + Seções)
- [x] Projetos (cards + páginas)
- [ ] Área Administrativa (login)

## Decisões
- Tipografia: Inter
- UI: Dark + Azul tech + Verde destaque

## Pendências
- Leads (DB + API)
- Página Investidores

## Arquivos alterados
- /src/pages/home.html
- /src/assets/css/main.css
```

---

# 1) Sitemap (estrutura do site)

## Páginas públicas

* `/` Home
* `/sobre` Sobre a Inovam
* `/projetos` Vitrine de Projetos

  * `/projetos/247-locacao`
  * `/projetos/tindkey`
* `/ecossistema` Programas, parceiros e eventos (DSX etc.)
* `/imprensa` Press kit + releases
* `/investidores` Investor Page (pitch institucional)
* `/contato` Contato + captação

## Área restrita (sócios)

* `/admin/login`
* `/admin/dashboard`
* `/admin/leads`
* `/admin/conteudos`
* `/admin/projetos`
* `/admin/noticias`
* `/admin/configuracoes`

---

# 2) Identidade Visual (pronta para /docs/identidade-visual.md)

## 2.1 Direção de marca

**Personalidade:** institucional, tecnológica, confiável, “deep tech amazônica”, pronta para escalar.
**Tom:** direto, seguro, focado em valor e evidência.

## 2.2 Estilo UI

* Layout em grid (12 col)
* Muito espaço em branco (ou “respiro” no dark)
* Cards com bordas suaves (12–16px)
* Ícones lineares (Lucide/Heroicons)
* Microanimações leves (hover, fade, parallax sutil)

## 2.3 Tipografia

* Primary: **Inter**
* Fallback: system-ui, -apple-system, Segoe UI, Roboto

## 2.4 Paleta (nomes sem amarrar cor exata)

* **Base Dark** (background)
* **Surface** (cards)
* **Tech Blue** (CTA principal / links)
* **Tech Green** (destaques de performance / sucesso / aprovações)
* **Neutral** (textos secundários)

## 2.5 Componentes essenciais

* Navbar com CTA fixo (“Seja parceiro”)
* Hero com vídeo/imagem (opcional)
* Seção “Proof / Authority” com selos: Tecnova III, PPI 4.0, parceiros, eventos
* Cards de projetos com “TRL / estágio / impacto”
* Formulários com validação + “thank you state”
* Rodapé robusto (CNPJ, contatos, redes, documentos)

---

# 3) Copywriting completo (pronto para colar no site)

> Sugestão: salvar tudo em **/docs/copywriting-site.md** e o time front só “puxa” por seção.

## 3.1 HOME (`/`)

### Hero (headline + subheadline)

**Headline:**
**Tecnologia que transforma mercados na Amazônia e no Brasil.**

**Subheadline:**
A Inovam desenvolve plataformas B2B com **IA, automação e compliance**, conectando inovação à economia real — com projetos aprovados e validados em programas estratégicos.

**CTAs:**

* **Conhecer projetos**
* **Seja parceiro / investidor**

### Seção: O que fazemos

**Título:** Soluções escaláveis para desafios reais
**Texto:**
Construímos plataformas digitais de alto impacto para setores que exigem eficiência, rastreabilidade e confiança. Nosso foco é **B2B**, com automação ponta-a-ponta e arquitetura pronta para crescimento.

**Bullets:**

* IA aplicada (recomendação, visão computacional, automação)
* Compliance e segurança by design
* Cloud e integrações via APIs
* Produto orientado a métricas (KPIs e dashboards)

### Seção: Provas de execução (Authority)

**Título:** Execução comprovada e inserção no ecossistema
**Itens (cards):**

* Projeto aprovado **Finep Tecnova III** (FAPEAM)
* Projeto aprovado **PPI 4.0 (CITS)**
* Parcerias estratégicas: **Aceleradoras / ICTs / Hubs**
* Participação em eventos (ex.: **DSX / Distrito**)

### Seção: Projetos em destaque (cards)

* 247 Locação — “Locação B2B inteligente com IA”
* TindKey — “Plataforma de obras com orçamento automatizado”

### Seção: CTA final

**Título:** Vamos construir o próximo case juntos
**Texto:**
Se você busca uma solução digital robusta, parceria estratégica ou oportunidade de investimento, fale com a Inovam.

**Botões:**

* Falar com a Inovam
* Investidores

---

## 3.2 SOBRE (`/sobre`)

**Título:** Inovam — Inovações Tecnológicas da Amazônia
**Texto:**
A Inovam nasceu com o propósito de usar tecnologia para transformar processos empresariais, tornando operações mais eficientes, seguras e sustentáveis. Evoluímos de serviços técnicos e desenvolvimento sob demanda para uma atuação sólida em plataformas escaláveis, com foco em **IA, automação e digitalização**.

**Destaques institucionais (blocos):**

* Base em Manaus/AM — conexão com o ecossistema amazônico de inovação
* Foco em produtos e plataformas B2B
* Construção de soluções com governança técnica e escalabilidade

**Sócios e liderança (cards):**

* **Jhonatas Araújo** — CEO
* **Leonardo Costa** — COO
* **Márcio Costa (Archon)** — Estratégia, Arquitetura e Tecnologia

---

## 3.3 PROJETOS (`/projetos`)

**Título:** Projetos com validação e visão de escala
**Texto:**
Nossos projetos unem tecnologia avançada e execução estruturada — com foco em impacto mensurável, aderência regulatória e crescimento sustentável.

**Cards:**

* 247 Locação (Tecnova III)
* TindKey (PPI 4.0 / CITS)
* “Futuros lançamentos” (em breve)

---

## 3.4 PROJETO 247 LOCAÇÃO (`/projetos/247-locacao`)

**Hero**
**Título:** 247 Locação
**Sub:** Plataforma B2B para locação inteligente de bens móveis corporativos com IA, automação e compliance.

### Dor que resolve

O mercado é fragmentado e burocrático: encontrar fornecedor confiável, negociar, contratar e garantir segurança jurídica custa tempo e dinheiro. Ao mesmo tempo, empresas possuem ativos ociosos sem canal eficiente de monetização.

### Proposta de valor

A 247 Locação conecta locadores e locatários com uma jornada digital completa: busca, match, contrato digital, pagamento e acompanhamento.

### Diferenciais tecnológicos

* Recomendação inteligente (ML)
* Cadastro assistido (visão computacional)
* Contratos e rastreabilidade
* Segurança e conformidade (LGPD e controles de acesso)
* Arquitetura escalável e integrável (APIs)

### Resultados e metas (formato KPI)

* Redução de tempo de fechamento (meta)
* Automação operacional (meta)
* Reutilização de ativos e economia circular (meta)

### CTA

* Solicitar apresentação
* Ser parceiro piloto
* Quero investir

> Referência base: documentação do projeto aprovada (Tecnova III / FAPEAM) e descrição do MVP.  

---

## 3.5 PROJETO TINDKEY (`/projetos/tindkey`)

**Hero**
**Título:** TindKey
**Sub:** Plataforma que conecta obras a profissionais, com orçamento automatizado e operação digital.

### O que é

Uma experiência “tipo iFood” para construção civil: donos de obra solicitam, recebem orçamento automatizado, contratam, pagam por marcos e acompanham execução.

### Diferenciais

* Orçamento automatizado (base técnica)
* Contratos digitais e pagamentos escalonados
* Marketplace e reputação
* Relatórios e controle de custos

### CTA

* Entrar na lista de espera
* Seja parceiro / investidor

---

## 3.6 ECOSSISTEMA (`/ecossistema`)

**Título:** Ecossistema, parcerias e validação
**Texto:**
A Inovam atua conectada a hubs, aceleradoras, ICTs e programas estratégicos, ampliando validação, acesso a mercado e governança de execução.

**Seções:**

* Programas: Tecnova III, PPI 4.0
* Hubs / Aceleradoras / ICTs
* Eventos: DSX (Distrito), meetups, demos, pitch days
* Casos e cartas de apoio (quando aplicável)

---

## 3.7 IMPRENSA (`/imprensa`)

**Título:** Imprensa e materiais oficiais
**Blocos para download:**

* Logo (PNG/SVG)
* Fotos dos fundadores (futuro)
* One-pager 247 Locação
* One-pager TindKey
* Releases

---

## 3.8 CONTATO (`/contato`)

**Título:** Fale com a Inovam
**Texto:**
Escolha seu objetivo e receba um retorno com direcionamento e proposta.

**Formulário com tipo de interesse:**

* Quero usar a solução
* Quero ser parceiro
* Quero investir
* Quero imprensa

---

# 4) Página de Investidores (`/investidores`) — pronta

## 4.1 Hero

**Título:** Investidores
**Sub:** Plataformas B2B com IA, automação e compliance — feitas para escalar com governança e impacto mensurável.

CTAs:

* Solicitar deck
* Agendar reunião

## 4.2 Tese de investimento (blocos)

* Mercado com dor real e ineficiência
* Produto com diferencial técnico defensável
* Inserção em programas e ecossistema
* Roadmap de expansão + monetização

## 4.3 Destaques (cards)

* 247 Locação — modelo B2B marketplace + automação
* TindKey — construção civil, alto volume, recorrência

## 4.4 Oportunidades de parceria

* Pilotos corporativos (PIM / PMEs)
* Integrações com ERPs, logística, seguradoras, fintechs
* Expansão regional e nacional

## 4.5 Métricas e governança (seção “Data Room light”)

* KPIs (MVP, CAC, Retenção, GMV, NPS) — placeholders prontos
* Segurança e compliance (LGPD, acesso, trilha de auditoria)
* Modelo financeiro (placeholder para planilha / PDF)

## 4.6 CTA final

**“Solicite o material para investidores”** + formulário dedicado.

---

# 5) Arquitetura Técnica (backend + admin) — pronta para /docs/arquitetura.md

## 5.1 Visão macro (camadas)

* **Frontend Público** (site institucional)
* **API** (REST)
* **Admin Web** (restrito)
* **DB** (PostgreSQL recomendado)
* **Storage** (imagens/arquivos)
* **Observabilidade** (logs, métricas)

## 5.2 Módulos da API

* Auth (JWT, refresh token, roles)
* CMS (conteúdos do site)
* Projects (projetos e páginas)
* Leads (captação + funil)
* Events (ecossistema e eventos)
* Media (upload e organização)
* AuditLog (rastreabilidade admin)

## 5.3 Requisitos de segurança (mínimo)

* Senhas com hash forte (bcrypt/argon2)
* JWT + refresh token
* RBAC (roles: Sócio/Admin/Editor/Leitura)
* Rate limit em endpoints públicos (leads)
* Audit trail para alterações no admin
* Logs centralizados (arquivo + console)

## 5.4 Endpoints (exemplo)

* `POST /api/auth/login`
* `POST /api/auth/refresh`
* `GET /api/public/site` (conteúdo consolidado)
* `POST /api/public/leads`
* `GET /api/admin/leads`
* `POST /api/admin/projects`
* `PUT /api/admin/projects/:id`
* `POST /api/admin/media/upload`

---

# 6) Modelo de Banco (PostgreSQL) — pronto para /docs/banco-de-dados.md

## 6.1 Tabelas principais

### users

* id (uuid)
* name
* email (unique)
* password_hash
* role (enum: OWNER, ADMIN, EDITOR, VIEWER)
* is_active
* created_at, updated_at

### sessions_refresh_tokens

* id (uuid)
* user_id (fk)
* token_hash
* expires_at
* revoked_at
* created_at

### pages (CMS)

* id (uuid)
* slug (unique) — “/sobre”, “/investidores”
* title
* seo_title
* seo_description
* content_json (ou markdown)
* status (DRAFT, PUBLISHED)
* published_at
* created_by, updated_by
* created_at, updated_at

### projects

* id (uuid)
* slug (unique) — “247-locacao”, “tindkey”
* name
* tagline
* summary
* content_json
* stage (IDEA, MVP, PILOT, SCALE)
* program_tags (array) — “Tecnova III”, “PPI 4.0”
* status (DRAFT, PUBLISHED)
* created_at, updated_at

### partners

* id
* name
* type (HUB, ICT, ACCELERATOR, COMPANY)
* logo_media_id
* url
* created_at

### events

* id
* name (ex.: DSX)
* organizer
* year
* location
* description
* media_id
* created_at

### leads

* id
* name
* email
* phone
* company
* role_title
* interest_type (CUSTOMER, PARTNER, INVESTOR, PRESS)
* message
* source (site, instagram, evento)
* status (NEW, CONTACTED, QUALIFIED, WON, LOST)
* created_at, updated_at

### audit_logs

* id
* user_id
* action (CREATE/UPDATE/DELETE/LOGIN)
* entity (projects/pages/leads)
* entity_id
* diff_json
* ip
* created_at

### media

* id
* filename
* url
* mime_type
* size
* created_at

---

# 7) Área Administrativa (UX e telas)

## 7.1 Telas mínimas

* Login
* Dashboard (cards: leads novos, tráfego, conversões)
* Leads (lista, filtro, status, exportar CSV)
* Conteúdos (páginas)
* Projetos (CRUD)
* Eventos / Ecossistema (CRUD)
* Mídia (upload + biblioteca)
* Logs (audit log)

## 7.2 Regras de governança (admin)

* Toda alteração relevante gera `audit_logs`
* Publicação exige status PUBLISHED + timestamp
* Exportação de leads (CSV) com filtro por período e status

---

# 8) Conteúdos prontos “Futuros Lançamentos” (bloco reutilizável)

**Título:** Em construção: próximos lançamentos
**Texto:**
A Inovam mantém um pipeline contínuo de inovação. Novos módulos e plataformas serão anunciados conforme atingirem maturidade técnica e validação de mercado.

**CTAs:**

* Entrar na newsletter
* Quero ser parceiro de validação

---

# 9) Checklist de entrega para Antigravity (feito para marcar)

## Site

* [ ] Home final (copy + CTA + projetos + authority)
* [ ] Sobre
* [ ] Projetos (vitrine)
* [ ] 247 Locação (página completa)
* [ ] TindKey (página completa)
* [ ] Ecossistema (com DSX)
* [ ] Imprensa (press kit)
* [ ] Investidores
* [ ] Contato (forms com tipos)

## Admin

* [ ] Login + JWT + Roles
* [ ] CRUD Projetos/Páginas/Eventos
* [ ] Leads + funil + export CSV
* [ ] Audit log

## Infra

* [ ] /brain no gitignore
* [ ] Logs diários
* [ ] /docs versionado (se aplicável)

