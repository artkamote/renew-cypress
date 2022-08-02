class AutoStore_Login_PO {
    typeLoginForm(email, password) {
        cy.log('Type email and password')
        cy.get('#loginFrm_loginname').type(email);
        cy.get('#loginFrm_password').type(password);
    }
    clickLoginButton(){
        cy.log('Click login button')
        cy.get('#loginFrm').find('button').contains('Login').click();
    }
}
export default AutoStore_Login_PO; 