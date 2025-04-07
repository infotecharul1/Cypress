describe('Cypress E2E test demo', () => {
  beforeEach(() => {
    cy.visit('https://example.com/')
  })

  it('Assert Url', () => {
    cy.url().should('contain', 'example.com')
  })
  it('Assert Title', () => {
    cy.title().should('contain', 'Example Domain')
  })
  it('Assert Element', () => {
    cy.get('h1').should('be.visible')
    cy.wait(2000)
    cy.get('p').should('be.visible')
  })
  it('Reload and Logs', () => {
    cy.log('Before Reload')
    cy.reload()
    cy.log('After Reload')
  })
})
