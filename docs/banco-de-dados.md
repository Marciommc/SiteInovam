# Modelo de Banco de Dados

## Tabelas Principais

### `users`
*   `id` (UUID, PK)
*   `name` (String)
*   `email` (String, Unique)
*   `password_hash` (String)
*   `role` (Enum: OWNER, ADMIN, EDITOR, VIEWER)
*   `is_active` (Boolean)
*   `created_at` (DateTime)
*   `updated_at` (DateTime)

### `pages` (CMS)
*   `id` (UUID, PK)
*   `slug` (String, Unique ex: "/sobre")
*   `title` (String)
*   `content` (Json/Markdown)
*   `status` (Enum: DRAFT, PUBLISHED)
*   `published_at` (DateTime)
*   `updated_at` (DateTime)

### `projects`
*   `id` (UUID, PK)
*   `slug` (String, Unique ex: "247-locacao")
*   `name` (String)
*   `tagline` (String)
*   `summary` (Text)
*   `stage` (Enum: IDEA, MVP, PILOT, SCALE)
*   `program_tags` (String[])
*   `content` (Json/Markdown)
*   `status` (Enum: DRAFT, PUBLISHED)
*   `created_at` (DateTime)

### `leads`
*   `id` (UUID, PK)
*   `name` (String)
*   `email` (String)
*   `phone` (String)
*   `company` (String)
*   `role` (String)
*   `interest` (Enum: CUSTOMER, PARTNER, INVESTOR, PRESS)
*   `message` (Text)
*   `source` (String)
*   `status` (Enum: NEW, CONTACTED, QUALIFIED, LOST)
*   `created_at` (DateTime)

### `audit_logs`
*   `id` (UUID, PK)
*   `user_id` (UUID, FK)
*   `action` (String)
*   `entity` (String)
*   `entity_id` (String)
*   `metadata` (Json)
*   `created_at` (DateTime)
