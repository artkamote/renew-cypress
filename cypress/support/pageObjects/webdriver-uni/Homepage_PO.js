class HomePage_PO {
    visitHomePage(){
        cy.visit(Cypress.env('host'))
    }
    
    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
    }
}
export default HomePage_PO; 