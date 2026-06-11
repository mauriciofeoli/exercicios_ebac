describe('Produtos (Livros)', () => {
  let token
  let bookId

  before(() => {
    cy.request('POST', '/api/login', {
      email: 'admin@biblioteca.com',
      password: 'admin123'
    }).then((res) => {
      token = res.body.token
    })
  })

  it('addProduct - deve criar um novo livro', () => {
    cy.request({
      method: 'POST',
      url: '/api/books',
      headers: { Authorization: token },
      body: {
        title: 'Produto de Teste Automatizado',
        author: 'Autor Automatizado',
        category: 'Teste',
        description: 'Livro criado por teste automatizado',
        total_copies: 3
      }
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('book')
      expect(res.body.book.title).to.eq('Produto de Teste Automatizado')
      bookId = res.body.book.id
    })
  })

  it('editProduct - deve atualizar o livro', () => {
    cy.request({
      method: 'PUT',
      url: `/api/books/${bookId}`,
      headers: { Authorization: token },
      body: {
        title: 'Produto Atualizado',
        author: 'Autor Automatizado',
        total_copies: 5
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('message')
      expect(res.body.bookId).to.eq(bookId)
    })
  })

  it('deleteProduct - deve remover o livro', () => {
    cy.request({
      method: 'DELETE',
      url: `/api/books/${bookId}`,
      headers: { Authorization: token }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('message')
    })
  })

  context('Teste de Contrato - POST /api/books', () => {
    let contractBookId

    it('deve retornar o contrato correto ao criar um livro', () => {
      cy.request({
        method: 'POST',
        url: '/api/books',
        headers: { Authorization: token },
        body: {
          title: 'Livro Contrato Teste',
          author: 'Autor Contrato',
          category: 'Contrato',
          total_copies: 1
        }
      }).then((res) => {
        expect(res.status).to.eq(201)
        expect(res.body).to.have.property('message').that.is.a('string')
        expect(res.body).to.have.property('book')
        expect(res.body.book).to.have.property('id').that.is.a('number')
        expect(res.body.book).to.have.property('title').that.is.a('string')
        expect(res.body.book).to.have.property('author').that.is.a('string')
        expect(res.body.book).to.have.property('category')
        expect(res.body.book).to.have.property('total_copies').that.is.a('number')
        expect(res.body.book).to.have.property('available_copies').that.is.a('number')
        expect(res.body.book).to.have.property('created_at')
        contractBookId = res.body.book.id
      })
    })

    after(() => {
      if (contractBookId) {
        cy.request({
          method: 'DELETE',
          url: `/api/books/${contractBookId}`,
          headers: { Authorization: token }
        })
      }
    })
  })
})
