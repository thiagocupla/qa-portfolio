describe('Automação de Testes - Tela de Login (SauceDemo)', () => {

  beforeEach(() => {
    // Visita a página do SauceDemo antes de cada teste
    cy.visit('https://www.saucedemo.com/')
  })

  it('CT-001: Deve realizar login com sucesso usando credenciais válidas', () => {
    // Preenche os campos de credenciais
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')

    // Clica no botão de login
    cy.get('#login-button').click()

    // Validações (Asserções)
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
  })

})