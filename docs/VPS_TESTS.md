# Guia de Diagnóstico VPS (Site Inovam)

Use este guia em caso de erro "Cannot GET /" ou problemas de conexão.

## 1. Verificar Status dos Containers
Acesse a VPS via SSH e rode:
```bash
docker ps
```
**O que buscar:**
- O container `inovam-site` deve estar com status `Up`.
- O container `inovam-db` (Postgres) também deve estar `Up`.

## 2. Verificar Logs da Aplicação (Essencial!)
Isso mostrará erros internos do Next.js ou banco de dados.
```bash
docker logs inovam-site --tail 50
```
**Analise:**
- ✅ `Ready in Xms` -> O servidor iniciou corretamente.
- ❌ `Error: Cannot find module` -> Falha no build/standalone.
- ❌ `P1001: Can't reach database server` -> Problema de conexão com o banco.

## 3. Teste de Conexão Local (Curl)
Verifique se o container responde dentro da VPS (ignorando Proxy/Internet).
```bash
curl -I http://localhost:3000
```
- Se retornar `HTTP/1.1 200 OK`: O site está funcionando, o problema é no Proxy/Apache.
- Se retornar `HTTP/1.1 404 Not Found`: O Next.js está rodando, mas a rota `/` (Home) não existe ou falhou.

## 4. Verificar Proxy Apache
Se o teste 3 funcionou, mas o domínio não abre:
- Verifique os logs do Apache: `tail -f /var/log/apache2/error.log` (ou caminho equivalente no Plesk).
- Confirme se `ProxyPass` está redirecionando para `http://localhost:3000`.

## Solução "Cannot GET /"
Este erro geralmente significa que o servidor (Next.js) recebeu a requisição mas não encontrou a página.
**Causas:**
1.  A pasta `app` ou `pages` não foi copiada corretamente no Dockerfile.
2.  O arquivo `layout.tsx` ou `page.tsx` está com erro de exportação.
3.  O `middleware.ts` está redirecionando para uma rota inexistente.

**Ação:** Envie o resultado do comando de logs (Passo 2) para análise!
