# Desenvolvimento de Sistemas Web

Tarefas da materia em um unico app React + TypeScript + Vite.

## Requisitos

- Node.js
- pnpm

## Como rodar

```
pnpm install
pnpm dev
```

A rota `/` mostra o menu com as tarefas. Cada tarefa fica em `/aula-XX`.

## Tarefas

- Aula 06: Meu Primeiro App React, componentes, JSX e navegacao. Rota: `/aula-06`

## Estrutura

```
src/App.tsx              roteador principal e menu
src/aulas/aulas.tsx      registro das tarefas
src/aulas/aula-06/       componentes, paginas, dados e assets da Aula 06
```

## Adicionar uma nova tarefa

1. Criar a pasta `src/aulas/aula-07` com o `App.tsx` e a estrutura da tarefa.
2. Adicionar um item em `src/aulas/aulas.tsx`.

O roteador nao precisa ser alterado.
