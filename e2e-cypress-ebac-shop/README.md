# Testes E2E - EBAC

Repositório de estudos e automação de testes end-to-end para a aplicação EBAC Shop.

## Objetivo

Validar os fluxos principais da interface, como login, cadastro, navegação e compra, garantindo que a experiência do usuário funcione conforme o esperado.

## Tecnologias

- Cypress
- JavaScript
- Faker

## Pré-requisitos

- Node.js
- npm
- Git

## Instalação

```bash
npm install
```

## Execução

### Modo headless

```bash
npx cypress run
```

### Interface do Cypress

```bash
npx cypress open
```

## Aplicação alvo

- EBAC Shop: http://lojaebac.ebaconline.art.br/

## Estrutura do projeto

- `cypress/` — testes automatizados e fixtures;
- `cypress.config.js` — configuração do Cypress;
- `package.json` — dependências e scripts do projeto.




