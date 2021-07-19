// baidu.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('browser stroage test', function () {
  it('test cookie', function () {
      cy.visit("http://127.0.0.1:5500/example/index.html")

      cy.window().should('have.property', 'bs')

      cy.window().bs.setCookie("weidehai",'100').to.equal(true)

  })
})
