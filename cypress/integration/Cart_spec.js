describe('Cart', () => {
  beforeEach(() => {
    cy.intercept('https://brewedtoserve.herokuapp.com/brews', {
        fixture: 'brews'
      })
      .visit('http://localhost:3000/cart/')
      cy.addToCart()
  })

  it('should have a sample test', () => {
    cy.url('eq','http://localhost:3000/cart/')
  })
})