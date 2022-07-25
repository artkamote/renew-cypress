class demo_productionReady_PO {
    visitSettingsPage(){
        cy.visit(Cypress.env('demohost') + 'settings')
    }
    
    // For typing on text area
    typeOnBio() {
        cy.get('textarea').type('Testing only please disregard');
    }
}
export default demo_productionReady_PO; 