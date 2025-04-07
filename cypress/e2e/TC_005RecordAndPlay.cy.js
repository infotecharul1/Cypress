describe('Record and Play', () => {
  it('Login to Home page', () => {
    // login to the Home page
    cy.visit('https://www.demoblaze.com')
    cy.get('#login2').click()
    cy.get('#loginusername').type('test', { force: true })
    cy.get('#loginpassword').type('test', { force: true })
    cy.get('.btn-primary').contains('Log in').click()

    // add a product to the cart
    cy.get(
      ':nth-child(5) > .card > .card-block > .card-title > .hrefch'
    ).click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('#cartur').click()
  })

  // delete an item or clear the cart
  it('Remove an item to cart', function () {
    cy.visit('https://www.demoblaze.com')
    cy.get('#login2').click()
    cy.get('#loginusername').type('test', { force: true })
    cy.get('#loginpassword').type('test', { force: true })
    cy.get('.btn-primary').contains('Log in').click()
    cy.get('#cartur').click()
    cy.get('#tbodyid > :nth-child(1) > :nth-child(4) > a').click()
    /* ==== End Cypress Studio ==== */
  })
})
