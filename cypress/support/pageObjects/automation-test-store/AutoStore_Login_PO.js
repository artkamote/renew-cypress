import * as selectors from '../../../fixtures/selectors.json'
class AutoStore_Login_PO {
    accessHomePage(){
        cy.visit(Cypress.env('host') + 'index.php?rt=account/login ')
    }
    
    typeLoginForm(email, password) {
        cy.log('Type email and password')
        cy.typeOnTextBox(selectors.login.email, email)
        cy.typeOnTextBox(selectors.login.password, password)
    }
    clickLoginButton(){
        cy.log('Click login button')
        cy.clickElementByText(selectors.login.loginform, 'button', 'Login');
    }
}
export default AutoStore_Login_PO; 