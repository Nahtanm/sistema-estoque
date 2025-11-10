# Sistema de Gestão de Estoque

Este é um projeto front-end em React + Vite + Tailwind CSS que implementa uma interface simples para gerenciar produtos, movimentações e configurações. O layout principal usa uma barra lateral esquerda (`LeftBack`) e uma área principal (`RightBack`) onde as páginas são renderizadas.

Este README explica como configurar, rodar o projeto localmente e como a navegação entre páginas foi implementada (sem roteador externo) — útil para você entender e continuar o desenvolvimento.

## Tecnologias

- React
- Vite
- Tailwind CSS
- react-icons

## Pré-requisitos

- Node.js (versão LTS recomendada)
- npm (ou yarn)

## Instalação (rápida)

1. Clone o repositório:

```powershell
git clone git@github.com:Nahtanm/sistema-estoque.git
cd sistema-de-gestão-de-estoque
```

2. Instale as dependências:

```powershell
npm install
```

## Rodando em desenvolvimento

```powershell
npm run dev
```

O Vite normalmente abrirá o navegador em `http://localhost:5173` (ou outra porta disponível). Confira o terminal para a URL correta.

## Build para produção

```powershell
npm run build
npm run preview
```

## Estrutura importante do projeto

- `src/App.jsx` — Componente raiz que monta `Header`, `LeftBack` e `RightBack`.
- `src/assets/components/LeftBack/LeftBack.jsx` — Barra lateral com as opções.
- `src/assets/components/LeftBack/Options/Options.jsx` — Item clicável da barra lateral.
- `src/assets/components/RightBack/RightBack.jsx` — Área que renderiza as páginas.
- `src/assets/pages/dashboard/Dashboard.jsx` — Página Dashboard.
- `src/assets/pages/produtos/Produtos.jsx` — Página Produtos.
- `src/assets/pages/movimentacao/Movement.jsx` — Página Movimentações.
