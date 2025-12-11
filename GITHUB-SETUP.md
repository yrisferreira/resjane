# 📦 Como Adicionar no GitHub - Passo a Passo

## ✅ Já foi configurado no seu computador!

O repositório local já está pronto com:
- ✅ Todos os arquivos commitados
- ✅ Remote configurado: `https://github.com/yrisferreira/jane-recursos.git`
- ✅ Branch `main` pronta

## 🚀 Agora você precisa:

### 1️⃣ Criar o repositório no GitHub

1. Acesse: **https://github.com/new**
2. **Repository name**: `jane-recursos`
3. Escolha **Public** ou **Private**
4. ⚠️ **NÃO marque** "Initialize with README" (já temos um)
5. Clique em **"Create repository"**

### 2️⃣ Fazer Push do Código

Depois de criar o repositório, escolha UMA das opções:

#### 🔵 Opção A - Push Simples (vai pedir login)
```bash
git push -u origin main
```
Se pedir usuário/senha, use seu username do GitHub e um **Personal Access Token** (não use sua senha do GitHub).

#### 🟢 Opção B - Usando SSH (se você tem chave SSH)
```bash
git remote set-url origin git@github.com:yrisferreira/jane-recursos.git
git push -u origin main
```

#### 🟡 Opção C - Criar Personal Access Token

1. Acesse: **https://github.com/settings/tokens**
2. Clique em **"Generate new token"** → **"Generate new token (classic)"**
3. Dê um nome: `jane-recursos-push`
4. Marque o escopo **`repo`**
5. Clique em **"Generate token"**
6. **COPIE o token** (você só vê uma vez!)
7. Use no comando:
```bash
git push https://SEU_TOKEN_AQUI@github.com/yrisferreira/jane-recursos.git main
```

### 3️⃣ Ou use o script automático

Execute no terminal:
```bash
./upload-github.sh
```

O script vai te guiar passo a passo!

---

## ✅ Depois do Push

1. Acesse: **https://github.com/yrisferreira/jane-recursos**
2. Você verá todo o código lá!
3. Agora pode fazer deploy na Vercel 🚀

---

**Dica:** Se você usa GitHub Desktop ou outra ferramenta GUI, pode fazer push por lá também!
