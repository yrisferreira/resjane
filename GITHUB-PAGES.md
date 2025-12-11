# 🌐 Configurar GitHub Pages - Passo a Passo

## ✅ Configuração Automática

O projeto já está configurado para GitHub Pages! Você só precisa ativar no GitHub.

## 📋 Passos para Ativar

### 1️⃣ Habilitar GitHub Pages no Repositório

1. Acesse seu repositório: **https://github.com/yrisferreira/resjane**
2. Clique em **Settings** (Configurações)
3. No menu lateral, role até **Pages**
4. Em **Source**, selecione: **GitHub Actions**
5. Pronto! 🎉

### 2️⃣ Fazer Push (já está configurado)

O GitHub Actions vai fazer deploy automaticamente quando você fizer push:

```bash
git add .
git commit -m "Configura GitHub Pages"
git push
```

### 3️⃣ Aguardar o Deploy

1. Vá em **Actions** no seu repositório
2. Você vai ver o workflow **"Deploy to GitHub Pages"** rodando
3. Aguarde 2-3 minutos
4. Quando terminar, aparece um ✅ verde

### 4️⃣ Acessar seu Site

Seu site estará disponível em:
**https://yrisferreira.github.io/resjane**

## 🔄 Deploy Automático

Agora, toda vez que você fizer push para a branch `main`, o site será atualizado automaticamente!

## ⚙️ Como Funciona

- O workflow `deploy.yml` está em `.github/workflows/`
- Ele faz build do Next.js estático
- Faz deploy automaticamente no GitHub Pages
- URL: `https://yrisferreira.github.io/resjane`

## 🐛 Se Der Erro

1. Verifique se habilitou **GitHub Actions** no Settings → Actions
2. Verifique se selecionou **GitHub Actions** como source no Pages
3. Veja os logs em **Actions** → **Deploy to GitHub Pages**

## 📝 Notas

- O domínio é: `https://yrisferreira.github.io/resjane`
- Deploy automático a cada push
- HTTPS gratuito incluído
- Build otimizado para produção

---

**Pronto! Seu site estará no ar em poucos minutos! 🚀**
