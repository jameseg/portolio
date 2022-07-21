describe('empty spec', () => {
  beforeEach(() => {
    cy.login(`${Cypress.env('username')}`, `${Cypress.env('password')}`)
  })
  it('passes', () => {
    cy.visit('')
  })
})
