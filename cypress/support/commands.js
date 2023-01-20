Cypress.Commands.add('addToCart',() => {
  cy.intercept('https://brewed-to-serve.onrender.com/brews', {
        fixture: 'brews'
      })
      .visit('https://blendswithbenefits.netlify.app/shop/')
  cy.get('.brew-cards')
      .children('.brew-card')
      .its('length')
      .then(numOfCards => {
        for (let i = 1; i <= numOfCards; i ++){
          cy.get('.brew-card--cart-btn')
          .click({multiple:true})
          return
        }
      })
      .visit('https://blendswithbenefits.netlify.app/cart/')
})

Cypress.Commands.add('clearCart', () => {
  cy.intercept('https://brewed-to-serve.onrender.com/brews', {
    fixture: 'brews'
  })
  .visit('https://blendswithbenefits.netlify.app/cart/')
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
})

Cypress.Commands.add('placeOrder', () => {
  cy.addToCart()
  cy.intercept('https://brewed-to-serve.onrender.com/brews', {
    fixture: 'brews'
  })
  .visit('https://blendswithbenefits.netlify.app/cart/')
  cy.get('.place-order--btn')
  .click()
  .visit('https://blendswithbenefits.netlify.app/orders/')
})
