describe('Cart', () => {
  before(() => {
    cy.addToCart()
  })
  beforeEach(() => {
    cy.intercept('https://brewedtoserve.herokuapp.com/brews', {
        fixture: 'brews'
      })
      .visit('http://localhost:3000/cart/')
  })

  it('cart should contain all items that were clicked', () => {
    cy.get('.cart')
    .get('.cart-content-container')
      .children('.cart-item')
      .then(cartItems => expect(cartItems.length).to.eq(12))
      .reload()
  })

  it('should have the correct number of pounds per item', () => {
    cy.get('.cart-content-container')
    .children('.cart-item')
    .each(() => {
      cy.get('.cart-counter > .cart-counter--num-items')
      .contains('1 lbs')
    })
  })
})