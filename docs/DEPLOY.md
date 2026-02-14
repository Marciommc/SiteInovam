# Guia de Deploy e Configuração (VPS + GitHub Actions)

Este documento detalha como configurar o deploy automático do Site Inovam para sua VPS Plesk (38.242.243.45).

## 1. Pré-requisitos na VPS (Plesk/Ubuntu)
Acesse sua VPS via SSH e garanta que o Docker está instalado e rodando.
```bash
# Verificar se docker está instalado
docker --version

# Se não estiver, instale via Plesk (Extensão Docker) ou via terminal:
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

## 2. Banco de Dados (Postgres Isolado)
Como você já tem um serviço na porta 5432, vamos subir um **novo Postgres** na porta **5433**.

Execute este comando na sua VPS apenas **uma vez**:

```bash
docker run -d \
  --name inovam-db \
  --restart always \
  -p 5433:5432 \
  -e POSTGRES_USER=inovam \
  -e POSTGRES_PASSWORD=SuaSenhaForteAqui \
  -e POSTGRES_DB=inovam \
  -v inovam_pgdata:/var/lib/postgresql/data \
  postgres:15-alpine
```

Isso criará o banco isolado. Agora, sua `DATABASE_URL` no GitHub Secrets será:
`postgresql://inovam:SuaSenhaForteAqui@38.242.243.45:5433/inovam?schema=public`

## 3. Configuração do Repositório (GitHub)
No repositório `https://github.com/Marciommc/SiteInovam`, vá em **Settings > Secrets and variables > Actions** e adicione os seguintes "Repository secrets":

| Secret Name | Descrição | Exemplo / Valor |
| :--- | :--- | :--- |
| `VPS_HOST` | IP do seu servidor | `38.242.243.45` |
| `VPS_USERNAME` | Usuário SSH (root ou outro) | `root` |
| `VPS_SSH_KEY` | Chave Privada SSH (PEM) | `-----BEGIN RSA PRIVATE KEY...` |
| `DATABASE_URL` | Conexão do Banco (Porta 5433) | `postgresql://inovam:senha@38.242.243.45:5433/inovam` |
| `NEXT_PUBLIC_SITE_URL` | URL final do site | `https://inovam.com.br` |

> **Nota sobre o VPS_SSH_KEY**:
> Como você já gerou a chave na VPS (`/root/.ssh/id_rsa`), faça o seguinte:
> 1.  **Autorize a chave**: Rode `cat /root/.ssh/id_rsa.pub >> /root/.ssh/authorized_keys` na VPS.
> 2.  **Copie a Privada**: Rode `cat /root/.ssh/id_rsa`, copie todo o conteúdo (começa com `-----BEGIN...`) e cole no Secret do GitHub.

## 3. Versionamento Inicial
Execute os comandos abaixo na pasta raiz do projeto (`c:\Central\Dev\Inovam\Site`) para enviar o código:

```bash
# Inicializar Git (se não houve)
git init

# Adicionar arquivos
git add .

# Commit inicial
git commit -m "feat: initial commit Site Inovam v1.0"

# Adicionar remoto
git remote add origin https://github.com/Marciommc/SiteInovam.git

# Enviar (O GitHub pode pedir autenticação)
git push -u origin main
```

## 4. O que o GitHub Actions fará?
1.  A cada `push` na branch `main`:
2.  Construirá a imagem Docker do site.
3.  Enviará para o GitHub Container Registry (GHCR).
4.  Acessará sua VPS via SSH.
5.  Baixará a nova imagem e reiniciará o container `inovam-site` na porta 3000.

## 5. Primeiro Deploy e Banco de Dados (Importante!)
O GitHub Actions vai instalar o site, mas **não configura o banco de dados nem o domínio** automaticamente. Você precisa fazer isso uma vez:

### Passo A: Criar o Banco (se ainda não fez)
Na VPS, rode o comando do Postgres (Seção 2 deste guia).

### Passo B: Criar as Tabelas (Migração)
Como o banco de produção começa vazio, você precisa enviar a estrutura das tabelas. A forma mais segura é via **Tunnel SSH** da sua máquina local:

1.  Abra um terminal na sua máquina local (não na VPS).
2.  Crie um túnel: `ssh -L 5434:localhost:5433 root@38.242.243.45`
    *(Isso conecta a porta 5434 do seu PC na porta 5433 da VPS)*.
3.  Em **outro terminal local**, na pasta do projeto, rode:
    ```powershell
    # Temporariamente aponta para o túnel
    $env:DATABASE_URL="postgresql://inovam:SuaSenhaForteAqui@localhost:5434/inovam?schema=public"
    npx prisma migrate deploy
    ```
4.  Pronto! As tabelas foram criadas na VPS. Pode fechar o túnel.

## 6. Configuração Final no Plesk
O site estará rodando em `http://localhost:3000` dentro da VPS. Para torná-lo acessível pelo domínio:

1.  Acesse o Painel Plesk.
2.  Vá em **"Docker Proxy Rules"** (se tiver a extensão) e aponte para o container `inovam-site` porta 3000.
3.  **Alternativa 1 (Nginx - Recomendado se ativo):**
    *   Vá em **Apache & nginx Settings**.
    *   Desmarque "Proxy mode" (se houver) ou adicione nas **Additional nginx directives**:
        ```nginx
        location / {
            proxy_pass http://localhost:3001;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
        ```

4.  **Alternativa 2 (Apache Puro - Seu Caso):**
    Se o Nginx estiver desativado, use as diretivas do Apache.
    *   Vá em **Apache & nginx Settings**.
    *   Nos campos **Additional Apache directives** (tanto para *HTTP* quanto *HTTPS*), adicione:
        ```apache
        ProxyPreserveHost On
        ProxyPass / http://localhost:3001/
        ProxyPassReverse / http://localhost:3001/
        ```

