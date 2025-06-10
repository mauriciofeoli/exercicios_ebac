        # linguagem: pt

        Funcionalidade: Configuração de produto
            Como cliente da EBAC-SHOP
            Quero configurar meu produto de acordo com meu tamanho e gosto
            E escolher a quantidade
            Para depois inserir no carrinho

        Contexto:
            Dado que estou na página de um produto da EBAC-SHOP

        Cenário: Todos os campos obrigatórios devem ser preenchidos
            Quando eu não selecionar a cor, tamanho ou quantidade
            E tentar adicionar o produto ao carrinho
            Então devo ver uma mensagem de erro informando que todos os campos são obrigatórios

        Esquema do Cenário: Validação de limite de quantidade
            Quando eu selecionar a cor <cor>
            E o tamanho <tamanho>
            E a quantidade <quantidade>
            E tentar adicionar ao carrinho
            Então o sistema deve exibir uma mensagem <mensagem>

        Exemplos:
            | cor      | tamanho | quantidade | mensagem                          |
            | azul     | M       | 5          | permitir a adição ao carrinho     |
            | vermelho | G       | 10         | permitir a adição ao carrinho     |
            | preto    | P       | 11         | mostrar erro: Máximo 10 por venda |

        Cenário: Botão "limpar" deve voltar ao estado original
        Quando eu preencher a cor, tamanho e quantidade
        E clicar no botão "limpar"
        Então os campos devem ser resetados para o estado original


