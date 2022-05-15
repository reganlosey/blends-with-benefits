describe("Header", () => {
  beforeEach(() => {
    cy.intercept('https://brewedtoserve.herokuapp.com/brews', {
        fixture: 'brews'
      })
      .visit('http://localhost:3000/')
  })

  it('should have a sample test', () => {
    cy.url('eq', 'http://localhost:3000/')
  })

  it('should display all header images', () => {
    cy.get('.header')
    .get('.site-logo')
    .should('be.visible')
    .get('.orders-img')
    .should('be.visible')
    .get('.cart-img')
    .should('be.visible')
  })

  it('header images should link to correct routes', () => {
    cy.get('.header')
    .get('.orders-img')
    .click()
    .url('eq', 'http://localhost:3000/orders')
    .get('.cart-img')
    .click()
    .url('eq', 'http://localhost:3000/cart')
    .get('.site-logo')
    .click()
    .url('eq', 'http://localhost:3000/')
  })
})