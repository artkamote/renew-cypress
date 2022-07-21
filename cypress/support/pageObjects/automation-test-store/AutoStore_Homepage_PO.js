class AutoStore_Homepage_PO {
    accessHomePage(){
        cy.visit(Cypress.env('host'))
    }

    clickOn_HairCare_Link() {
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
    }
}
export default AutoStore_Homepage_PO; 