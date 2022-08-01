const url = Cypress.env('webdriveruniurl')
describe("Visual Testing", () => {
    it("Visual testing webdriver IO", () => {

        cy.visit(url)
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.contains('#contact_me', 'CONTACT US');
        cy.compareSnapshot('visual-testing', 0.0);
    });
});  