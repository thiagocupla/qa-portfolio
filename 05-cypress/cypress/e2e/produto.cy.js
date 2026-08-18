describe('Automação de Testes - Produtos e Carrinho (SauceDemo)', () => {

  beforeEach(() => {
    // Garante que o login seja feito automaticamente antes de cada caso de teste
    cy.realizarLogin('standard_user', 'secret_sauce')
  })

  it('CT-004: Deve exibir a lista de produtos com sucesso', () => {
    cy.get('.inventory_list').should('be.visible')
    cy.get('.inventory_item').should('have.length.at.least', 1)
  })

  it('CT-005: Deve adicionar um produto ao carrinho com sucesso', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })

  it('CT-006: Deve remover o produto do carrinho', () => {
    // Adiciona para depois remover
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    
    // Valida que a bolinha com a quantidade no carrinho sumiu
    cy.get('.shopping_cart_badge').should('not.exist')
  })

})