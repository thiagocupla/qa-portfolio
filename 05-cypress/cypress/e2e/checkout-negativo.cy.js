describe('Fluxo E2E - Cenários Negativos no Checkout', () => {

  beforeEach(() => {
    // Acessa a loja, realiza o login e adiciona o item ao carrinho
    cy.visit('/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
  })

  it('CT-007: Deve exibir erro ao tentar avançar no checkout com campos vazios', () => {
    // Clica em continuar sem preencher nada
    cy.get('[data-test="continue"]').click()

    // Valida a mensagem de erro no formulário
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Error: First Name is required')
  })

  it('CT-008: Deve exibir erro ao preencher apenas o primeiro nome', () => {
    cy.get('[data-test="firstName"]').type('Thiago')
    cy.get('[data-test="continue"]').click()

    // Valida que o sistema exige o sobrenome
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Error: Last Name is required')
  })
})