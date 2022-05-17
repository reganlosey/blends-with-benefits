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

  it('should display all header links', () => {
    cy.get('.header')
      .get('.home-link')
      .should('be.visible')
      .get('.nav-link--orders')
      .should('be.visible')
      .get('.nav-link--cart')
      .should('be.visible')
  })

  it('header links should link to correct routes', () => {
    cy.get('.header')
      .get('.nav-link--orders')
      .click()
      .url('eq', 'http://localhost:3000/orders')
      .get('.nav-link--cart')
      .click()
      .url('eq', 'http://localhost:3000/cart')
      .get('.home-link')
      .click()
      .url('eq', 'http://localhost:3000/')
  })

  it('header links should be active when current url matches their route', () => {
    cy.url('eq', 'http://localhost:3000/')
    cy.get('.header')
      .get('.home-link')
      .should('have.attr', 'class', 'home-link active')
      .get('.nav-link--shop')
      .click()
      .url('eq', 'http://localhost:3000/shop')
      .get('.nav-link-a--shop')
      .should('exist')
      .get('.nav-link--coffee')
      .click()
      .url('eq', 'http://localhost:3000/shop/coffee')
      .get('.nav-link-a--coffee')
      .should('exist')
      .get('.nav-link--tea')
      .click()
      .url('eq', 'http://localhost:3000/shop/tea')
      .get('.nav-link-a--tea')
      .should('exist')
      .get('.nav-link--cart')
      .click()
      .url('eq','http://localhost:3000/cart')
      .get('.nav-link-a--cart')
      .should('exist')
      .get('.nav-link--orders')
      .click()
      .url('eq','http://localhost:3000/orders')
      .get('.nav-link-a--orders')
      .should('exist')



  })
})