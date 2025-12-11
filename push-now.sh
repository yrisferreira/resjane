#!/bin/bash

echo "🚀 Fazendo push para https://github.com/yrisferreira/resjane.git"
echo ""

# Verificar status
echo "📍 Remote configurado:"
git remote -v
echo ""

# Tentar push com gh CLI primeiro
if command -v gh &> /dev/null; then
    echo "🔐 Tentando autenticar com GitHub CLI..."
    if gh auth status &> /dev/null; then
        echo "✅ Autenticado! Fazendo push..."
        git push -u origin main
        exit 0
    else
        echo "⚠️  GitHub CLI não está autenticado."
        echo "   Execute: gh auth login"
        echo ""
    fi
fi

# Tentar push direto (vai pedir credenciais)
echo "📤 Fazendo push (pode pedir login)..."
echo ""
echo "💡 DICAS DE AUTENTICAÇÃO:"
echo "   - Username: seu username do GitHub"
echo "   - Password: use um Personal Access Token (não sua senha)"
echo "   - Criar token: https://github.com/settings/tokens"
echo ""
echo "Ou execute: gh auth login (se preferir usar CLI)"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCESSO! Código enviado para o GitHub!"
    echo "🌐 Veja em: https://github.com/yrisferreira/resjane"
else
    echo ""
    echo "❌ Erro no push. Tente uma das opções:"
    echo "   1. Execute: gh auth login"
    echo "   2. Use um Personal Access Token como senha"
    echo "   3. Configure SSH: git remote set-url origin git@github.com:yrisferreira/resjane.git"
fi
