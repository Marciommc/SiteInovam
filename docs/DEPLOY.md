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

## 5. Configuração Final no Plesk
No painel Plesk, configure o domínio para usar **Docker Proxy Rule** ou configure o Nginx para redirecionar o tráfego da porta 80/443 para a porta `3000` local.
