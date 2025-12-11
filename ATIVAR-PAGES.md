# 🔧 Como Ativar GitHub Pages - SOLUÇÃO COMPLETA

## ❌ Erro: "Não encontrado" ou "Pages falhou"

Isso acontece quando o GitHub Pages não está habilitado ainda. Siga estes passos:

---

## ✅ SOLUÇÃO PASSO A PASSO

### 1️⃣ Habilitar GitHub Pages (IMPORTANTE!)

1. Acesse: **https://github.com/yrisferreira/resjane/settings/pages**

2. Em **"Source"**, você deve ver 3 opções:
   - ❌ None (desabilitado)
   - ✅ **GitHub Actions** ← ESCOLHA ESTA
   - ❌ Deploy from a branch

3. Selecione: **"GitHub Actions"**

4. Clique em **"Save"**

5. ⚠️ **AGUARDE** alguns segundos para salvar

---

### 2️⃣ Verificar Permissões

1. Ainda nas **Settings**, vá em **Actions** → **General**

2. Certifique-se que:
   - ✅ "Allow all actions and reusable workflows" está marcado
   - OU pelo menos "Allow local actions and reusable workflows"

3. Role até **"Workflow permissions"**
   - ✅ Marque: **"Read and write permissions"**
   - ✅ Marque: **"Allow GitHub Actions to create and approve pull requests"**

4. Clique em **"Save"**

---

### 3️⃣ Executar o Workflow

#### Opção A: Push Novamente (Recomendado)
```bash
git add .
git commit -m "Atualiza workflow do GitHub Pages"
git push
```

#### Opção B: Executar Manualmente
1. Vá em: **https://github.com/yrisferreira/resjane/actions**
2. Clique em **"Deploy to GitHub Pages"**
3. Clique em **"Run workflow"** → **"Run workflow"**

---

### 4️⃣ Verificar Deploy

1. Vá em: **https://github.com/yrisferreira/resjane/actions**
2. Você deve ver o workflow rodando
3. Aguarde 2-3 minutos
4. Quando aparecer ✅ verde, está pronto!

---

### 5️⃣ Acessar seu Site

Depois que o deploy terminar:

**https://yrisferreira.github.io/resjane**

---

## 🔍 Checklist de Verificação

Antes de rodar o workflow, verifique:

- [ ] GitHub Pages está habilitado (Settings → Pages → Source: GitHub Actions)
- [ ] Permissões do Actions estão corretas (Settings → Actions → General)
- [ ] Workflow permissions está como "Read and write"
- [ ] Código foi enviado para o GitHub (git push)
- [ ] Workflow está em `.github/workflows/deploy.yml`

---

## 🐛 Se Ainda Der Erro

### Erro: "Pages build failed"

1. Vá em **Actions** → Clique no workflow que falhou
2. Veja os **logs** (Build ou Deploy)
3. Copie a mensagem de erro

### Erro: "Not found"

- Certifique-se que habilitou o GitHub Pages primeiro
- Verifique se o repositório é público (ou você tem GitHub Pro)

### Erro: "Permission denied"

- Verifique as permissões em Settings → Actions → General
- Workflow permissions deve ser "Read and write"

---

## 💡 Dica Extra

Depois que funcionar uma vez, todos os próximos pushes vão fazer deploy automaticamente!

---

## 📞 Precisa de Ajuda?

Se ainda não funcionar:
1. Tire print dos Settings → Pages
2. Tire print dos logs do Actions
3. Me envie que eu ajudo a resolver!

---

**O mais importante: HABILITE o GitHub Pages PRIMEIRO antes de rodar o workflow!**
