describe('Automação de Testes - Tela de Login (SauceDemo)', () => {

  it('CT-001: Deve realizar login com sucesso usando credenciais válidas', () => {
    // Usando o comando customizado em uma única linha
    cy.realizarLogin('standard_user', 'secret_sauce')
    
    // Validação
    cy.url().should('include', '/inventory.html')
  })

  it('CT-002: Deve exibir mensagem de erro ao tentar logar com usuário bloqueado', () => {
    cy.realizarLogin('locked_out_user', 'secret_sauce')
    
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('CT-003: Deve exibir mensagem de erro ao digitar senha inválida', () => {
    cy.realizarLogin('standard_user', 'senha_errada')
    
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

})
