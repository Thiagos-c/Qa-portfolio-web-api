describe('Login Tests', () => {

  it('Login válido', () => {
    cy.visit('https://example.com/login')

    cy.get('input[name="username"]').type('testuser')
    cy.get('input[name="password"]').type('123456')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/dashboard')
  })

  it('Login inválido', () => {
    cy.visit('https://example.com/login')

    cy.get('input[name="username"]').type('wrong')
    cy.get('input[name="password"]').type('wrong')

    cy.get('button[type="submit"]').click()

    cy.contains('Invalid credentials')
  })

})
