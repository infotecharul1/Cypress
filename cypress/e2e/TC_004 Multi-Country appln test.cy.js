describe('Multi-Country Appln Test', () => {
  const country_code = ['/in/', '/gb/en/', '/se/', '/dk/', '/fi/', '/pl/']

  it('Verify the behaviour of the country', () => {
    country_code.forEach((country) => {
      cy.visit(`https://www.ikea.com${country}`)
    })
  })
})
