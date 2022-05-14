describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it('should have a sample test', () => {
    expect(true).to.equal(true)
  })
})
