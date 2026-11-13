# Testes End to End - Ebac Shop com Jenkins

> Exercício feito a partir do template disponibilizado pela EBAC no curso de Qualidade de Software.

Minha parte: configurei o `Jenkinsfile` para rodar os testes Cypress num agente Jenkins (Windows).
Como agora o projeto está dentro de `exercicios_ebac`, o pipeline clona este repositório e roda os comandos na pasta `e2e-cypress-jenkins`.

Ebac shop: http://lojaebac.ebaconline.art.br/

## Clonando e executando em sua máquina

### Pré-requisito:

-Node.js - Você encontra em: https://nodejs.org/en/

-Visual Studio Code ou qualquer editor de texto - você encontra em: https://code.visualstudio.com/download

-Git: você encontra em: https://git-scm.com/downloads


Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/EBAC-QE/testes-e2e-ebac-shop.git
```
```
cd testes-e2e-ebac-shop
```

#### Para instalar as dependencias:
```
npm install 
```

#### Para executar em moodo Headlesss via console:
```
npx cypress run
```

#### Para executar via Dashboard:
```
npx cypress open 
```
Após abrir o dasboard, clique na opção "Running integration tests" para rodar todos os testes.


### Bibliotecas de apoio:
-Cypress: Framework de automação: https://cypress.io/

-Faker: Biblioteca para geração de massa de dados: https://www.npmjs.com/package/faker


### Bom exercício ;) 
Fábio & José Ernesto
Qualidade de software




