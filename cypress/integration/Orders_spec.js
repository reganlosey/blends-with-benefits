describe('Orders', () => {
  before(() => {
    cy.placeOrder()
  })
  it('should have a sample test', () => {
    cy.url('eq', 'https://blendswithbenefits.netlify.app/cart/orders/')
  })

  it('should render an order card', () => {
    cy.get('.order-card')
      .get('.order-card--order-num')
      .should('exist')
      .get('.order-card--total')
      .should('contain', "Order Total: $70.20")
      .get('.order-card--order-date')
      .should('contain', '2022')
      .get('.items-ordered-txt')
      .should('exist')
  })

  it('should contain the items from the placed order', () => {
    cy.get('.order-summary')
    .children()
    .then(orders => expect(orders.length).to.eq(6))

  })
})