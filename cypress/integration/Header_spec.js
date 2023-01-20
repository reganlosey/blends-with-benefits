describe("Header", () => {
  beforeEach(() => {
    cy.intercept('https://brewed-to-serve.onrender.com/brews', {
        fixture: 'brews'
      })
      .visit('https://blendswithbenefits.netlify.app/')
  })

  it('should have a sample test', () => {
    cy.url('eq', 'https://blendswithbenefits.netlify.app/')
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
      .url('eq', 'https://blendswithbenefits.netlify.app/cart/orders/')
      .get('.nav-link--cart')
      .click()
      .url('eq', 'https://blendswithbenefits.netlify.app/cart/cart/')
      .get('.home-link')
      .click()
      .url('eq', 'https://blendswithbenefits.netlify.app/cart/')
  })

  it('header links should be active when current url matches their route', () => {
    cy.url('eq', 'https://blendswithbenefits.netlify.app/cart/')
    cy.get('.header')
      .get('.home-link')
      .should('have.attr', 'class', 'home-link active')
      .get('.nav-link--shop')
      .click()
      .url('eq', 'https://blendswithbenefits.netlify.app/cart/shop')
      .get('.nav-link-a--shop')
      .should('exist')
      .get('.nav-link--coffee')
      .click()
      .url('eq', 'https://blendswithbenefits.netlify.app/cart/shop/coffee/')
      .get('.nav-link-a--coffee')
      .should('exist')
      .get('.nav-link--tea')
      .click()
      .url('eq', 'https://blendswithbenefits.netlify.app/cart/shop/tea/')
      .get('.nav-link-a--tea')
      .should('exist')
      .get('.nav-link--cart')
      .click()
      .url('eq','https://blendswithbenefits.netlify.app/cart/cart/')
      .get('.nav-link-a--cart')
      .should('exist')
      .get('.nav-link--orders')
      .click()
      .url('eq','https://blendswithbenefits.netlify.app/cart/orders/')
      .get('.nav-link-a--orders')
      .should('exist')
  })
})