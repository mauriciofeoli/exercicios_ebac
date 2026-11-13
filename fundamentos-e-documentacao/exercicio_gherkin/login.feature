        # linguagem: pt
        
        Funcionalidade: Login na plataforma
            Como cliente da EBAC-SHOP
            Quero fazer o login (autenticação) na plataforma
            Para visualizar meus pedidos

        Contexto:
            Dado que estou na página de login da EBAC-SHOP

        Cenário: Autenticação válida
            Quando eu digitar o usuário "joao@ebac.com.br"
            E a senha "senhacorreta@123"
            Então devo ser redirecionado para a página de checkout

        Cenário: Autenticação inválida
            Quando eu digitar o usuário "joao@ebac.com.br"
            E a senha "senhaerrada@123"
            Então deve exibir uma mensagem de alerta "Usuário ou senha inválidos"

        Esquema do Cenário: Exibir mensagem de erro para múltiplas combinações inválidas
            Quando eu digitar o <usuario>
            E a <senha>
            Então deve exibir a <mensagem> de erro

        Exemplos:
            | usuario           | senha           | mensagem                   |
            | joao@eac.com.br   | senhaerrada@123 | Usuário ou senha inválidos |

