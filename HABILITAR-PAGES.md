# Por que o site não funciona em https://yrisferreira.github.io/resjane?

O site não está funcionando porque o GitHub Pages precisa ser habilitado manualmente no repositório. Siga estes passos:

## Passo 1: Habilitar GitHub Pages

1. Acesse: https://github.com/yrisferreira/resjane/settings/pages

2. Em "Source", você vai ver 3 opções:
   - None (desabilitado) - está assim agora
   - Deploy from a branch
   - **GitHub Actions** ← ESCOLHA ESTA

3. Selecione "GitHub Actions"

4. Clique em "Save"

## Passo 2: Verificar Permissões

1. Acesse: https://github.com/yrisferreira/resjane/settings/actions

2. Em "Workflow permissions":
   - Selecione "Read and write permissions"
   - Marque "Allow GitHub Actions to create and approve pull requests"

3. Clique em "Save"

## Passo 3: Executar o Workflow

Depois de habilitar o Pages, você precisa executar o workflow:

### Opção A: Executar Manualmente
1. Vá em: https://github.com/yrisferreira/resjane/actions
2. Clique em "Deploy to GitHub Pages"
3. Clique no botão "Run workflow"
4. Selecione branch "main"
5. Clique em "Run workflow"

### Opção B: Fazer um novo push
```bash
git commit --allow-empty -m "Trigger deploy"
git push
```

## Passo 4: Aguardar

1. Vá em: https://github.com/yrisferreira/resjane/actions
2. Aguarde o workflow terminar (2-3 minutos)
3. Quando aparecer check verde, o site estará funcionando

## Por que aconteceu?

O GitHub Pages só funciona depois de ser habilitado manualmente nas configurações do repositório. O workflow está pronto, mas precisa que você ative o Pages primeiro.

Depois de fazer isso uma vez, todos os próximos pushes vão fazer deploy automaticamente.

## Se ainda não funcionar

1. Verifique se o workflow terminou com sucesso (check verde)
2. Veja os logs do workflow clicando nele
3. Verifique se selecionou "GitHub Actions" como source
4. Aguarde alguns minutos após o deploy (pode demorar para propagar)

---

O mais importante: **HABILITE o GitHub Pages nas Settings primeiro!**
