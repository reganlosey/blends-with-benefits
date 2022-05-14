Cypress.Commands.add('addToCart',(addButton) => {
  cy.intercept('https://brewedtoserve.herokuapp.com/brews', {
        fixture: 'brews'
      })
      .visit('http://localhost:3000/shop/')
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
      .visit('http://localhost:3000/cart/')
})
