describe('Registro Ticketazo', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
    cy.get('[data-cy="input-nombres"]').type('Floriana')
    cy.get('[data-cy="input-apellido"]').type('Vosahlo')
    cy.get('[data-cy="input-telefono"]').type('3412345678')
    cy.get('[data-cy="select-provincia"]').type('Córdoba{enter}')
    cy.get('[data-cy="select-localidad"]').type('Córdoba{enter}')
  })

  //Caso Positivo

  it('Caso positivo: debería registrar un usuario válido', () => {
    cy.get('[data-cy="input-email"]').type(`flor${Date.now()}@mail.com`)
    cy.get('[data-cy="input-password"]').type('Password123!')
    cy.get('button[type="submit"]').click()

    cy.url().should('include', '/')
    cy.contains('Bienvenida').should('be.visible')
  })

  //Caso Negativo
  it('Caso negativo: no debería permitir email inválido', () => {
    cy.get('[data-cy="input-email"]').type('flor@gmail.com')
    cy.get('[data-cy="input-password"]').type('Password123!')
    cy.get('button[type="submit"]').click()
  })
})
