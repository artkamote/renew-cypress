class demo_productionReady_PO {
    visitSettingsPage(){
        cy.visit('https://demo.realworld.io/#/settings') // This is for demo purposes only will be using .env eventually
    }
    
    // For typing on text area
    typeOnBio() {
        cy.get('textarea').type('Testing only please disregard');
    }
}
export default demo_productionReady_PO; 