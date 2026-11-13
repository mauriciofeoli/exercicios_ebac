# Exercícios EBAC – Engenharia de Qualidade de Software

Atividades práticas do curso de Engenharia de Qualidade de Software da EBAC, reunidas num único repositório. Cada pasta é um projeto independente, com seu próprio README e suas dependências.

O projeto final do curso fica em um repositório separado: [TCC-EBAC-QE](https://github.com/mauriciofeoli/TCC-EBAC-QE).

## Índice

### Fundamentos

| Pasta | O que tem |
|---|---|
| [fundamentos-e-documentacao](fundamentos-e-documentacao) | Histórias de usuário, cenários em Gherkin, técnicas de teste, estratégia de testes, bug report, métricas ágeis (Kanban), análise com DevTools e teste de segurança no OWASP Juice Shop |
| [desafios-javascript](desafios-javascript) | Desafios de lógica em JavaScript (MDC, índices de array, soma de múltiplos) |

### Testes de UI / E2E (web)

| Pasta | O que tem | Ferramentas |
|---|---|---|
| [ui-cypress-ebac-shop](ui-cypress-ebac-shop) | Login, cadastro, conta e produtos da EBAC Shop | Cypress, fixtures, Page Objects |
| [e2e-cypress-ebac-shop](e2e-cypress-ebac-shop) | Fluxos de login, cadastro, navegação e compra | Cypress, Faker |
| [e2e-cypress-jenkins](e2e-cypress-jenkins) | Testes E2E executados por pipeline Jenkins | Cypress, Jenkins |
| [modulo-22-e2e-cypress-docker-ci](modulo-22-e2e-cypress-docker-ci) | Cadastro e checkout com Page Object e App Actions | Cypress, Docker, GitHub Actions |
| [modulo-23-e2e-cypress-ci](modulo-23-e2e-cypress-ci) | Navegação, cadastro e login com relatório no CI | Cypress, GitHub Actions |
| [modulo-31-cypress-relatorios](modulo-31-cypress-relatorios) | Cadastro e checkout com relatórios de execução | Cypress, ReportPortal, JUnit |

### Testes de API

| Pasta | O que tem | Ferramentas |
|---|---|---|
| [api-postman-serverest](api-postman-serverest) | Coleção de testes da API ServeRest | Postman |
| [api-cypress-ecommerce](api-cypress-ecommerce) | Endpoints de e-commerce: sucesso, falha e regras de negócio | Cypress |
| [modulo-24-api-cypress](modulo-24-api-cypress) | CRUD de categorias e livros da API Hub de Leitura | Cypress |

### Testes mobile

| Pasta | O que tem | Ferramentas |
|---|---|---|
| [modulo-17-mobile-android-webdriverio](modulo-17-mobile-android-webdriverio) | Login e navegação no app EBAC Shop em emulador Android | WebdriverIO, Appium |
| [modulo-29-mobile-ios-webdriverio](modulo-29-mobile-ios-webdriverio) | Login, carrinho e compra em app iOS | WebdriverIO, Appium |
| [modulo-30-mobile-ios-sauce-labs-ci](modulo-30-mobile-ios-sauce-labs-ci) | Fluxo de compra iOS em dispositivo na nuvem | WebdriverIO, Appium, Sauce Labs, GitHub Actions |

### Performance e dados

| Pasta | O que tem | Ferramentas |
|---|---|---|
| [modulo-28-performance-k6](modulo-28-performance-k6) | Teste de carga nos endpoints de produtos e clientes de uma API GraphQL | k6, GraphQL |
| [modulo-32-banco-de-dados-sql-nosql](modulo-32-banco-de-dados-sql-nosql) | Consultas no banco Sakila e em collections do MongoDB | SQL, MongoDB |

### Prática de Git

| Pasta | O que tem |
|---|---|
| [pratica-git-pagina-web](pratica-git-pagina-web) | Página web simples para praticar o fluxo de versionamento |
| [pratica-git-aula-5](pratica-git-aula-5) | Exercício de Git |

## Como executar

Entre na pasta do projeto e siga o README dela. Em geral:

```bash
cd modulo-22-e2e-cypress-docker-ci
npm install
npm test
```

## Integração contínua

Os workflows ficam em `.github/workflows/` e cada um só roda quando a pasta correspondente é alterada:

- `modulo-22-cypress.yml` — Cypress + relatório HTML como artefato;
- `modulo-23-cypress.yml` — Cypress + relatório HTML como artefato;
- `modulo-30-sauce-labs.yml` — testes iOS no Sauce Labs (precisa dos secrets do Sauce Labs configurados no repositório).

## Histórico

Os exercícios ficavam em repositórios separados (`ebac-exerc17`, `ebac-exerc-22` e outros) e foram trazidos para cá com o histórico de commits preservado.
