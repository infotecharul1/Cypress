describe('TC_002_Verify the login', () => {
  it('Check the login works', () => {
    cy.visit('https://www.demoblaze.com/index.html')

    cy.get('#login2').click()
    cy.get('#logInModal').should('be.visible')
    
    cy.get('#loginusername').type('test', { force: true })
    cy.get('#loginpassword').type('test',  { force: true })

    cy.get('.btn-primary').contains('Log in').click()

    cy.get('#nameofuser').should('contain', 'Welcome test')

  })
})