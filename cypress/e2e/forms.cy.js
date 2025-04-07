describe('Test forms', () => {
  it('submit and assert form', () => {
    // Load the form
    cy.visit('https://practice-automation.com/form-fields/')
    cy.get('#post-1103').should('be.visible')

    // Fill the form
    cy.get('#name-input').type('Test Arul')
    cy.contains('Water').click()
    cy.contains('Red').click()
    //cy.get('#automation').type('Yes')
    cy.get('#email').type('test@ikea.com')
    cy.get('#message').type('I like Cypress')
    cy.get('#submit-btn').click()


  })

})