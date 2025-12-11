#!/bin/bash

echo "🚀 Configurando GitHub para Jane Recursos"
echo ""

# Verificar se já tem remote
if git remote get-url origin &>/dev/null; then
    echo "✅ Remote já configurado:"
    git remote -v
    echo ""
fi

echo "📋 PRÓXIMOS PASSOS:"
echo ""
echo "1️⃣  CRIE o repositório no GitHub:"
echo "   - Acesse: https://github.com/new"
echo "   - Nome: jane-recursos"
echo "   - Público ou Privado (sua escolha)"
echo "   - NÃO marque 'Initialize with README'"
echo "   - Clique em 'Create repository'"
echo ""
echo "2️⃣  DEPOIS de criar, escolha uma opção abaixo:"
echo ""
echo "   OPÇÃO A - HTTPS (vai pedir login):"
echo "   git push -u origin main"
echo ""
echo "   OPÇÃO B - SSH (se você tem chave SSH configurada):"
echo "   git remote set-url origin git@github.com:yrisferreira/jane-recursos.git"
echo "   git push -u origin main"
echo ""
echo "   OPÇÃO C - Personal Access Token (mais seguro):"
echo "   git push https://SEU_TOKEN@github.com/yrisferreira/jane-recursos.git main"
echo "   (Veja como criar token: https://github.com/settings/tokens)"
echo ""

read -p "Pressione ENTER quando tiver criado o repositório e quiser tentar fazer push..."
echo ""

echo "🔄 Tentando fazer push..."
if git push -u origin main; then
    echo ""
    echo "✅ SUCESSO! Código enviado para o GitHub!"
    echo "🌐 Acesse: https://github.com/yrisferreira/jane-recursos"
else
    echo ""
    echo "❌ Erro no push. Você pode:"
    echo "   - Verificar se criou o repositório no GitHub"
    echo "   - Verificar suas credenciais do GitHub"
    echo "   - Usar um Personal Access Token"
fi
