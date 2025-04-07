describe('TC_001_Smoke test', () => {
  it('Check the webpage', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    cy.get('.navbar-brand').should('be.visible')
    cy.get('#navbarExample').should('be.visible')

    cy.get('#cat').should('be.visible')
    cy.get('#fotcont').should('be.visible')
  })
})