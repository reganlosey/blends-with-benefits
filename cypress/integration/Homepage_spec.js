describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it('should have a sample test', () => {
    expect(true).to.equal(true)
  })

  it('should display the background image', () => {
    cy.get('html')
      .should('have.css', 'background-image')
  })

  it('should display the greeting and site name', () => {
    cy.get('.intro')
      .get('.intro--site-name').contains('Blends With Benefits', {matchCase:false})
  })
  
  it('should have a tagline', () => {
    cy.get('.intro')
    .get('.intro--tagline').contains('The coffee and tea shop that grinds so fine', {matchCase:false})
    })
})