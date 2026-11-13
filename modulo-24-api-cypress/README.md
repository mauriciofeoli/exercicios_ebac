# Testes de API - Hub de Leitura

Repositório para automação de testes de API com Cypress, focado em validar serviços e contratos de uma aplicação de leitura.

## Objetivo

Cobrir cenários de API relacionados a categorias e produtos, incluindo criação, edição e remoção de registros, além de validação de contratos.

## Tecnologias

- Cypress
- JavaScript
- Node.js
- Mochawesome

## Pré-requisitos

- Node.js
- npm
- Git
- Aplicação local em execução

## Instalação

```bash
npm install
```

## Execução

### Execução em modo headless

```bash
npm test
```

### Execução com relatório

```bash
npm run report
```

### Interface do Cypress

```bash
npm run test:open
```

## Estrutura do projeto

- `cypress/` — testes automatizados;
- `cypress.config.js` — configuração do Cypress e relatórios;
- `package.json` — scripts e dependências do projeto.
