describe('Categorias', () => {
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

  it('addCategory - deve criar um livro com nova categoria', () => {
    cy.request({
      method: 'POST',
      url: '/api/books',
      headers: { Authorization: token },
      body: {
        title: 'Livro de Teste de Categoria',
        author: 'Autor Categoria',
        category: 'Categoria Automatizada',
        total_copies: 1
      }
    }).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body).to.have.property('book')
      expect(res.body.book).to.have.property('id')
      expect(res.body.book.category).to.eq('Categoria Automatizada')
      bookId = res.body.book.id
    })
  })

  it('editCategory - deve atualizar a categoria do livro', () => {
    cy.request({
      method: 'PUT',
      url: `/api/books/${bookId}`,
      headers: { Authorization: token },
      body: {
        title: 'Livro de Teste de Categoria',
        author: 'Autor Categoria',
        category: 'Categoria Atualizada'
      }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('message')
      expect(res.body.updatedFields).to.include('category')
    })
  })

  it('deleteCategory - deve remover o livro da categoria', () => {
    cy.request({
      method: 'DELETE',
      url: `/api/books/${bookId}`,
      headers: { Authorization: token }
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('message')
    })
  })

  context('Teste de Contrato - GET /api/books/categories', () => {
    it('deve retornar categorias com o contrato correto', () => {
      cy.request('GET', '/api/books/categories').then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body).to.have.property('categories').that.is.an('array')
        expect(res.body).to.have.property('total').that.is.a('number')
        res.body.categories.forEach((item) => {
          expect(item).to.have.property('name').that.is.a('string')
          expect(item).to.have.property('bookCount').that.is.a('number')
          expect(item).to.have.property('availableBooks').that.is.a('number')
        })
      })
    })
  })
})
