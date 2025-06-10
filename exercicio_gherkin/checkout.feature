        # linguagem: pt
        
        Funcionalidade: Cadastro de cliente
            Como cliente da EBAC-SHOP
            Quero concluir meu cadastro
            Para finalizar minha compra

        Contexto:
            Dado que estou na página de cadastro da EBAC-SHOP

        Cenário: Cadastro realizado com sucesso com os dados obrigatórios
            Quando eu preencher todos os campos obrigatórios com dados válidos
            E clicar no botão "Finalizar compra"
            Então meu cadastro deve ser concluído com sucesso
            E devo ser redirecionado para a página de finalização da compra

        Cenário: Exibir erro ao preencher o campo de e-mail com formato inválido
            Quando eu preencher todos os campos obrigatórios
            E digitar "joaoemail.com@" no campo de e-mail
            E clicar no botão "Finalizar compra"
            Então deve ser exibida a mensagem de erro "E-mail inválido"

        Cenário: Exibir alerta ao tentar cadastrar com campos obrigatórios vazios
            Quando eu deixar um ou mais campos obrigatórios em branco
            E clicar no botão "Finalizar compra"
            Então deve ser exibida a mensagem de alerta "Preencha todos os campos obrigatórios"
