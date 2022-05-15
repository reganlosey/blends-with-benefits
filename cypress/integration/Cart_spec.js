describe('Cart', () => {
  before(() => {
    cy.addToCart()
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

  it('should not be able to decrease an item\s quantity to less than 0', () => {
    cy.get('.cart-content-container')
      .get(':nth-child(1) > .cart-counter > .cart-counter--num-items')
      .contains('1 lbs')
      .get(':nth-child(1) > .cart-counter > .cart-counter--decrease-btn')
      .click()
      .click()
      .click()
      .get('.cart-counter--num-items')
      .contains('0 lbs')
      .get(':nth-child(1) > .cart-counter > .cart-counter--increase-btn')
      .click()
  })
  it('should charge $5 for shipping on orders less than $20', () => {
    cy.get('.cart-content-container')
      .children()
      .its('length')
      .then(numOfItems => {
        for (let i = 2; i <= numOfItems; i++) {
          cy.get('.cart-counter > .cart-counter--decrease-btn')
            .click({
              multiple: true
            })
          return
        }
      })
      .get('.cart-totals--subtotal')
      .contains('$0.00')
      .get('.cart-totals--shipping')
      .contains('$5.00')
    cy.get('.cart-content-container')
      .get(':nth-child(1) > .cart-counter > .cart-counter--increase-btn')
      .click()
      .get('.cart-totals--subtotal')
      .contains('$10.00')
      .get('.cart-totals--shipping')
      .contains('$5.00')
  })

  it('should provide free shipping for orders over $20', () => {
    cy.get('.cart-content-container')
    .get(':nth-child(1) > .cart-counter > .cart-counter--increase-btn')
    .click()
    cy.get('.cart-totals--shipping')
    .contains('Free!')
  })
  
  it('should calculate the totals correctly', () => {
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
})