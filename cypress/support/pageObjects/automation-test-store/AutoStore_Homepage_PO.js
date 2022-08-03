class AutoStore_Homepage_PO {
    accessHomePage(){
        cy.visit(Cypress.env('host'))
    }

    clickOn_HairCare_Link(subNav) {
        cy.get("a[href*='product/category&path=']").contains(subNav).click();
    }
}
export default AutoStore_Homepage_PO; 