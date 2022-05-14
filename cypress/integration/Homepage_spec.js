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
      .get('.intro--heading').contains('Hey There Hot Stuff, Welcome To')
      .get('.intro--site-name').contains('BLENDS WITH BENEFITS')
  })
  
  it('should have buttons that link to /shop:coffee and /shop:tea', () => {
    cy.get('.browse-wrapper')
      .get('.browse-wrapper--coffee-btn')
      .contains('Browse Coffee')
      .click()
      .url("eq", "http://localhost:3000/shop/coffee")
    cy.go('back')
    cy.get('.browse-wrapper')
      .get('.browse-wrapper--tea-btn')
      .contains('Browse Tea')
      .click()
      .url("eq", "http://localhost:3000/shop/tea")
  })
})