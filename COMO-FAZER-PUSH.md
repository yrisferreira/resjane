# 📤 Como Fazer Push Manualmente - Passo a Passo

## ✅ Tudo já está configurado!

O repositório local já está pronto. Você só precisa fazer autenticação e push.

---

## 🎯 Opção 1: Usando Personal Access Token (MAIS FÁCIL)

### Passo 1: Criar um Token no GitHub

1. Acesse: **https://github.com/settings/tokens**
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Dê um nome: `resjane-push`
4. Marque a opção **`repo`** (vai marcar automaticamente todas as sub-opções)
5. Role até o final e clique em **"Generate token"**
6. **⚠️ IMPORTANTE:** COPIE o token agora! (algo como: `ghp_xxxxxxxxxxxxxxxxxxxx`)
   - Você só vê ele uma vez!
   - Cole em um bloco de notas temporariamente

### Passo 2: Fazer o Push

No terminal, execute:

```bash
git push -u origin main
```

Quando pedir:
- **Username**: `yrisferreira` (seu username do GitHub)
- **Password**: Cole o token que você copiou (não é sua senha!)

Pronto! ✅

---

## 🎯 Opção 2: Usando GitHub CLI

### Passo 1: Fazer Login

Execute no terminal:
```bash
gh auth login
```

Você vai ver opções:
1. Escolha: **GitHub.com**
2. Escolha: **HTTPS** (mais fácil)
3. Escolha: **Login with a web browser**
4. Pressione ENTER
5. Ele vai gerar um código
6. Copie o código e aperte ENTER
7. Vai abrir o navegador, cole o código e autorize
8. Pronto!

### Passo 2: Fazer o Push

Depois do login:
```bash
git push -u origin main
```

Vai funcionar automaticamente! ✅

---

## 🎯 Opção 3: Usar Token Direto no Comando (RÁPIDO)

Se você já tem um token, pode fazer direto:

```bash
git push https://SEU_TOKEN_AQUI@github.com/yrisferreira/resjane.git main
```

Substitua `SEU_TOKEN_AQUI` pelo token que você criou.

---

## 🎯 Opção 4: GitHub Desktop (SE VOCÊ USA)

1. Abra o GitHub Desktop
2. File → Add Local Repository
3. Selecione a pasta `/Users/yrisfereira/Documents/jane`
4. Vai aparecer para fazer commit e push
5. Clique em "Publish repository"
6. Pronto! ✅

---

## ❓ Qual escolher?

- **Mais rápido**: Opção 1 (Token)
- **Mais fácil depois**: Opção 2 (GitHub CLI)
- **Se já usa GUI**: Opção 4 (GitHub Desktop)

---

## ✅ Depois do Push

Acesse: **https://github.com/yrisferreira/resjane**

Você vai ver todo o código lá! 🎉

Depois pode fazer deploy na Vercel!
