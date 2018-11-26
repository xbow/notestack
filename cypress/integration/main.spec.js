describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/create')
  })

  it('has the right title', () => {
    cy.title().should('equal', 'Notestack')
  })

  it('has a textarea', () => {
    cy
      .get('textarea[placeholder="Write a note..."]')
      .should('have.length', 1)
  })

  it('has a "Submit" button', () => {
    cy
      .get('[data-cy="TextButton"]')
      .contains('Submit')
      .should('have.length', 1)
  })

})

