describe('Fluxo E2E - Finalização de Compra (Checkout)', () => {
  
  beforeEach(() => {
    // Acesse a página inicial ou faz o login necessário antes de cada teste
    cy.visit('/')
  })

  it('Deve realizar a compra de um produto com sucesso', () => {
    // 1. Login
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // 2. Seleção e adição do produto ao carrinho
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()

    // 3. Validação do carrinho e início do checkout
    cy.url().should('include', '/cart.html')
    cy.get('[data-test="checkout"]').click()

    // 4. Preenchimento dos dados de entrega
    cy.get('[data-test="firstName"]').type('Thiago')
    cy.get('[data-test="lastName"]').type('QA')
    cy.get('[data-test="postalCode"]').type('11000-000')
    cy.get('[data-test="continue"]').click()

    // 5. Confirmação do resumo do pedido
    cy.url().should('include', '/checkout-step-two.html')
    cy.get('[data-test="finish"]').click()

    // 6. Validação da tela de sucesso
    cy.url().should('include', '/checkout-complete.html')
    cy.get('.complete-header')
      .should('be.visible')
      .and('contain', 'Thank you for your order!')
  })
})