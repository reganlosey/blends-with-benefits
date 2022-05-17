describe('Cart', () => {
  before(() => {
    cy.addToCart()
  })

  it('cart should contain all items that were clicked', () => {
    cy.get('.cart')
      .get('.cart-content-container')
      .children('.cart-item')
      .then(cartItems => expect(cartItems.length).to.eq(6))
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

  it('should be able to increase and decrease an item\'s quantity', () => {
    cy.get('.cart-content-container')
      .get(':nth-child(1) > .cart-counter > .cart-counter--increase-btn')
      .click()
      .get('.cart-counter--num-items')
      .contains('2 lbs')
      .get(':nth-child(1) > .cart-counter > .cart-counter--decrease-btn')
      .click()
      .get('.cart-counter--num-items')
      .contains('1 lbs')
  })

  it('should remove an item when quantity drops below 1', () => {
    cy.get('.cart-content-container')
      .get(':nth-child(1) > .cart-counter > .cart-counter--increase-btn')
      .click()
      .get(':nth-child(1) > .cart-counter > .cart-counter--num-items')
      .contains('2 lbs')
      .get(':nth-child(1) > .cart-counter > .cart-counter--decrease-btn')
      .click()
      .click()
      .get('.cart-content-container')
      .children('.cart-item')
      .then(cartItems => expect(cartItems.length).to.eq(5))
      .reload()

  })

  it('should charge $5 for shipping on orders less than $20', () => {
    cy.get('.cart-content-container')
      .get('.cart-item > .cart-counter > .cart-counter--decrease-btn')
      .each(($btn, index) => {
        if (index == 4) {
          return false
        } else {
          cy.get($btn)
            .click()
        }
      })
    cy.get('.cart-content-container')
      .get('.cart-totals--subtotal')
      .contains('$10.00')
      .get('.cart-totals--shipping')
      .contains('$5.00')
  })

  it.skip('should provide free shipping for orders over $20', () => {
    cy.get('.cart-content-container')
      .get(':nth-child(1) > .cart-counter > .cart-counter--increase-btn')
      .click()
    cy.get('.cart-totals--shipping')
      .contains('Free!')
  })

  it.skip('should calculate the totals correctly', () => {
    cy.get('.cart-content-container')
      .get(':nth-child(1) > .cart-counter > .cart-counter--decrease-btn')
      .click()
    cy.get('.cart-totals--subtotal')
      .should('contain', '$10.00')
      .get('.cart-totals--shipping')
      .should('contain', '$5.00')
      .get('.cart-totals--tax')
      .should('contain', '$0.80')
      .get('.place-order--final-total')
      .should('contain', '$15.80')
  })

  it.skip('should clear the cart once an order is placed', () => {
    cy.get('.place-order--btn')
      .click()
      .get('.cart-totals--subtotal')
      .should('contain', '$0.00')
      .get('.cart-content-container')
      .get(':nth-child(1) > .cart-counter')
      .should('not.exist')
  })

  it.skip('should not allow the user to place an order without a subtotal', () => {
    cy.get('.cart-totals--subtotal')
      .contains('$0.00')
      .get('.place-order--btn')
      .should('have.attr', 'disabled', 'disabled')
      .and('have.css', 'cursor', 'not-allowed')
  })
})