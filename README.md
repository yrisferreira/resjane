# Jane Recursos Pedagógicos

Site de loja online de recursos pedagógicos e materiais educacionais criados por Jane Ferreira, Pedagoga especialista em Educação Especial, Inclusiva e Psicopedagogia.

## Tecnologias

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React

## Como executar

1. Clone o repositório:
```bash
git clone https://github.com/yrisferreira/resjane.git
cd resjane
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse http://localhost:3001 no seu navegador.

## Estrutura do Projeto

```
jane/
├── app/              # Páginas e rotas do Next.js
│   ├── page.tsx     # Página inicial
│   ├── sobre/       # Sobre Jane Ferreira
│   ├── produtos/    # Catálogo de produtos
│   ├── carrinho/    # Carrinho de compras
│   ├── login/       # Login/Cadastro
│   ├── assinatura/  # Planos de assinatura
│   └── downloads/   # Área de downloads
├── components/       # Componentes React reutilizáveis
├── types/           # Definições de tipos TypeScript
└── data/            # Dados de produtos
```

## Funcionalidades

- Página inicial com produtos em destaque
- Página sobre com formação acadêmica da Jane
- Catálogo de produtos com paginação e filtros
- Sistema de carrinho de compras
- Páginas de login e cadastro
- Área de downloads de arquivos
- Página de assinatura (Clubinho Jane)
- Design responsivo em rosa e roxo

## Deploy

Este projeto está configurado para deploy no GitHub Pages:

1. O código está no repositório
2. GitHub Actions faz o deploy automaticamente
3. O site fica disponível em: https://yrisferreira.github.io/resjane

## Scripts

```bash
npm run dev      # Inicia servidor de desenvolvimento (porta 3001)
npm run build    # Build para produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa o linter
```

## Licença

Este projeto está sob a licença MIT.

---

Desenvolvido por Jane Recursos Pedagógicos