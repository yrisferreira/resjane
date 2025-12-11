# 🚀 Guia de Deploy - Jane Recursos Pedagógicos

## Passo a Passo para Colocar no GitHub e Deploy

### 1️⃣ Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name**: `jane-recursos` (ou o nome que preferir)
   - **Description**: "Site de loja online de recursos pedagógicos"
   - Marque como **Public** (ou Private se preferir)
   - **NÃO** marque "Initialize with README" (já temos um)
5. Clique em **"Create repository"**

### 2️⃣ Conectar e Fazer Push

Depois de criar o repositório, GitHub vai mostrar os comandos. Execute no terminal:

```bash
# Adicionar o repositório remoto (substitua SEU-USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU-USUARIO/jane-recursos.git

# Renomear branch principal para main (se necessário)
git branch -M main

# Fazer push do código
git push -u origin main
```

**OU se preferir usar SSH:**
```bash
git remote add origin git@github.com:SEU-USUARIO/jane-recursos.git
git branch -M main
git push -u origin main
```

### 3️⃣ Deploy Automático na Vercel (GRÁTIS!)

A Vercel é a melhor opção para Next.js e é totalmente gratuita:

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign Up"** e faça login com GitHub
3. Clique em **"Add New Project"**
4. Selecione o repositório `jane-recursos`
5. A Vercel detecta automaticamente que é Next.js
6. Clique em **"Deploy"** (não precisa mudar nada)
7. Aguarde 2-3 minutos
8. **Pronto!** Seu site estará no ar! 🎉

A Vercel vai gerar uma URL tipo: `https://jane-recursos.vercel.app`

### 4️⃣ Configurar Domínio Customizado (Opcional)

1. Na Vercel, vá em **Settings** > **Domains**
2. Adicione seu domínio (ex: `janerecursos.com.br`)
3. Siga as instruções para configurar o DNS

### 5️⃣ Atualizações Futuras

Toda vez que você fizer push para o GitHub, a Vercel faz deploy automático:

```bash
git add .
git commit -m "Sua mensagem de commit"
git push
```

## 🎯 Próximos Passos

Após o deploy, você pode:
- ✅ Compartilhar o link com amigos
- ✅ Adicionar mais produtos
- ✅ Integrar sistema de pagamento
- ✅ Conectar banco de dados
- ✅ Adicionar autenticação real

## 💡 Dicas

- O primeiro deploy pode demorar um pouco mais
- A Vercel tem SSL (HTTPS) gratuito automaticamente
- Deploys futuros são super rápidos (1-2 minutos)
- Você pode ver logs e métricas na dashboard da Vercel

---

**Pronto para lançar seu site! 🚀**
