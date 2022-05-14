describe('Shop', () => {
  beforeEach(() => {
    cy.intercept('https://brewedtoserve.herokuapp.com/brews', { fixture: 'brews' })
    .visit('http://localhost:3000/shop/')
  })

  it('should have a sample test', () => {
    expect(true).to.eq(true)
  })

  it('should render coffee and tea cards to the grid', () => {
    cy.get('.brew-cards')
    .get(':nth-child(1) > .brew-info')
    .should('contain', 'Brazilian Arabica')
    .and('contain', 'Coffee')
    .and('contain', '$10/lb')
    .and('contain', 'Caffeinated: Yes')
    .get('.brew-info__body > .brew-card--cart-btn')
    .contains('Add To Cart')
    .get(':nth-child(6) > .brew-info')
    .should('contain', 'Chamomile')
    .and('contain', 'Tea')
    .and('contain', '$10/lb')
    .and('contain', 'Caffeinated: No')
    .get('.brew-info__body > .brew-card--cart-btn')
    .contains('Add To Cart')
  })
})