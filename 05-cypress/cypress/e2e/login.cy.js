describe('Automação de Testes - Tela de Login (SauceDemo)', () => {

  beforeEach(() => {
    // Visita a página do SauceDemo antes de cada teste
    cy.visit('https://www.saucedemo.com/')
  })

  it('CT-001: Deve realizar login com sucesso usando credenciais válidas', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
  })

  it('CT-002: Deve exibir mensagem de erro ao tentar logar com usuário bloqueado', () => {
    cy.get('#user-name').type('locked_out_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

    // Valida a mensagem de erro na tela
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('CT-003: Deve exibir mensagem de erro ao digitar senha inválida', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('senha_incorreta')
    cy.get('#login-button').click()

    // Valida se a mensagem de erro genérica aparece
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match')
  })

})