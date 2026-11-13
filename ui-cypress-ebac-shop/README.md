# Testes de UI – EBAC Shop com Cypress

Testes de interface da loja EBAC Shop com Cypress.

## Cenários

- Login: sucesso, usuário inválido, senha inválida, massa de dados e fixture.
- Cadastro de conta, inclusive com dados gerados por variável.
- Detalhes da conta.
- Produtos: selecionar da lista, buscar, visitar a página e adicionar ao carrinho.

## Estrutura

- `cypress/e2e/3-loja-ebac/` — cenários;
- `cypress/fixtures/` — massa de dados;
- `cypress/support/` — comandos customizados e Page Objects.

## Executar

```bash
npm install
npm test
```

Para enviar a execução ao Cypress Cloud, defina a variável `CYPRESS_RECORD_KEY` e rode `npm run cy:dash`.
