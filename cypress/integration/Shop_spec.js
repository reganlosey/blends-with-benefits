describe('Shop', () => {
  beforeEach(() => {
    cy.intercept('https://brewedtoserve.herokuapp.com/brews', {
        fixture: 'brews'
      })
      .visit('https://blendswithbenefits.netlify.app/shop/')
  })

  it('should have a sample test', () => {
    expect(true).to.eq(true)
  })
  it('should render all coffee and tea cards', () => {
    cy.get('.brew-cards')
      .children('.brew-card')
      .then(cards => expect(cards.length).to.eq(6))
  })

  it('all cards should contain a button to add the item to cart', () => {
    cy.get('.brew-cards')
      .children('.brew-card')
      .each(() => {
        cy.get('.brew-info > .brew-info__body > .brew-card--cart-btn')
          .should('contain', 'Add To Cart')
      })
  })

  it('should only render tea cards on visit to shop/tea', () => {
    cy.visit('https://blendswithbenefits.netlify.app/shop/tea')
      .get('.brew-cards')
      .children('.brew-card')
      .then(teaCards => expect(teaCards.length).to.eq(3))
      .each(() => {
        cy.get('.brew-info > .brew-info__body')
          .should('contain', 'Tea')
          .and('contain', '$10/lb')
      })
  })
})