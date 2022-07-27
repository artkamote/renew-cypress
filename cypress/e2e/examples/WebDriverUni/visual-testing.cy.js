const url = Cypress.env('webdriveruniurl')
describe("Visual Testing", () => {
    it("Add specific product to basket", () => {

        cy.visit(url)
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.contains('#contact_me', 'CONTACT US').then(firstForm => {
          cy.wrap(firstForm).toMatchImageSnapshot();
          cy.document().toMatchImageSnapshot();
        })
    });
});  