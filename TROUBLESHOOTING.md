# 🔧 Solução de Problemas - Deploy na Vercel

## ❌ Erro: 404 DEPLOYMENT_NOT_FOUND

Se você recebeu esse erro, siga estes passos:

### ✅ Solução

1. **Remova o projeto da Vercel** (se já criou):
   - Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
   - Vá em **Settings** do projeto
   - Role até o final e clique em **"Delete Project"**

2. **Faça push das alterações para o GitHub:**
   ```bash
   git add .
   git commit -m "Corrige configuração para Vercel"
   git push
   ```

3. **Crie um novo projeto na Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em **"Add New Project"**
   - Selecione o repositório `jane-recursos`
   - **IMPORTANTE:** Deixe todas as configurações padrão
   - A Vercel detecta automaticamente Next.js
   - Clique em **"Deploy"**

4. **Aguarde o build completar** (2-3 minutos)

### ⚙️ Configurações Recomendadas na Vercel

- **Framework Preset:** Next.js (detectado automaticamente)
- **Root Directory:** `./` (padrão)
- **Build Command:** `npm run build` (padrão)
- **Output Directory:** `.next` (padrão)
- **Install Command:** `npm install` (padrão)

**NÃO mexa nessas configurações!** Deixe tudo como está.

### ✅ Verificar se está funcionando

Após o deploy:
1. Acesse a URL gerada pela Vercel
2. Você deve ver a página inicial do site
3. Teste navegar entre as páginas

### 🐛 Se ainda der erro

1. Verifique os **logs de build** na Vercel:
   - Vá em **Deployments**
   - Clique no deployment
   - Veja os **Build Logs** para identificar o erro

2. Verifique se o build funciona localmente:
   ```bash
   npm run build
   ```
   Se funcionar localmente, o problema está na configuração da Vercel.

3. Tente fazer deploy novamente removendo e recriando o projeto.

### 📝 Checklist

- [ ] Build funciona localmente (`npm run build`)
- [ ] Código está no GitHub
- [ ] Projeto foi deletado e recriado na Vercel
- [ ] Configurações estão no padrão (não alteradas)
- [ ] Aguardou o build completar

---

**Build local testado e funcionando! ✅**

O projeto está pronto para deploy. Siga os passos acima e deve funcionar!
