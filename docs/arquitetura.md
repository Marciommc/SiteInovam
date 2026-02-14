# Arquitetura Técnica

## 1. Visão Macro
O sistema é composto por um **Frontend Público** (Next.js), uma **API** integrada (Next.js API Routes / Server Actions), uma **Área Administrativa** e um **Banco de Dados** Relacional.

## 2. Tecnologias (Stack)
*   **Framework:** Next.js 14+ (App Router).
*   **Linguagem:** TypeScript.
*   **Estilização:** Tailwind CSS.
*   **Banco de Dados:** PostgreSQL.
*   **ORM:** Prisma.
*   **Autenticação:** JWT (Jose ou NextAuth).
*   **Deploy:** Vercel (Frontend/API) + Neon/Supabase (DB) [Recomendado].

## 3. Estrutura de Camadas
1.  **Client Layer:** Componentes React (UI), Páginas Públicas.
2.  **Server Layer:** Server Actions, API Routes (`/api/...`).
3.  **Data Layer:** Prisma Client, Conexão PostgreSQL.

## 4. Módulos da Aplicação
*   **Auth:** Gerenciamento de sessão dos sócios (Area Restrita).
*   **CMS:** Gestão de conteúdo do site (Textos, Imagens).
*   **Projects:** Catálogo de projetos (247 Locação, TindKey).
*   **Leads:** Captura e gestão de contatos (Investidores, Parceiros).
*   **Events:** Registro de participação em ecossistemas e eventos.
*   **AuditLog:** Rastreabilidade de ações administrativas.

## 5. Segurança
*   BCrypt para hash de senhas.
*   JWT para sessão stateless.
*   Validação de dados com **Zod**.
*   Rate Limiting em endpoints públicos (ex: formulário de leads).
*   Middleware para proteção de rotas `/admin`.
