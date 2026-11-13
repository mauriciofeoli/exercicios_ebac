# Módulo 22 – Testes E2E com Cypress, Docker e CI

Automação end-to-end da [Loja EBAC](http://lojaebac.ebaconline.art.br) com Cypress, rodando em container Docker e no GitHub Actions.

## Cenários

- Cadastro de conta com e-mail e senha válidos (Page Object).
- Adicionar produto ao carrinho e seguir para o checkout (App Actions).

## Tecnologias

- Cypress 13
- JavaScript / Node.js
- Docker (imagem `cypress/included`)
- GitHub Actions
- Relatório JUnit convertido em HTML

## Estrutura

- `cypress/e2e/` — cenários de teste;
- `cypress/page-objects/` — Page Objects;
- `cypress/app-actions/` — ações reutilizáveis (carrinho);
- `scripts/generate-cypress-report.js` — gera o relatório HTML a partir do JUnit;
- `Dockerfile` — executa os testes em container.

## Executar

```bash
npm install
npm test                 # roda os testes e gera JUnit em cypress/reports/junit
npm run generate:report  # gera o relatório HTML em site/
```

Com Docker:

```bash
docker build -t ebac-cypress .
docker run --rm ebac-cypress
```

## CI

O workflow `.github/workflows/modulo-22-cypress.yml`, na raiz do repositório, roda os testes a cada alteração nesta pasta e publica o relatório HTML como artefato da execução.
