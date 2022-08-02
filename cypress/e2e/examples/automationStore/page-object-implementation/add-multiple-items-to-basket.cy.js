import AutoStore_HomePage_PO from '../../../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO'
import AutoStore_HairCare_PO from '../../../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO'
import AutoStore_Login_PO from '../../../../support/pageObjects/automation-test-store/AutoStore_Login_PO'
const url = Cypress.env('host')
describe("Add multiple items to basket", () => {
    const autoStore_Homepage_PO = new AutoStore_HomePage_PO();
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO();
    const autoStore_Login_PO = new AutoStore_Login_PO();

    before(function () {
        cy.fixture("product").then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(function () {
        cy.clear_session_storage();
        autoStore_Homepage_PO.accessHomePage();
        autoStore_Homepage_PO.clickOn_HairCare_Link();
    });

    it("Add specific items to basket", () => {
        autoStore_HairCare_PO.addHairCareProductsToBasket();
        autoStore_HairCare_PO.clickCheckout();
        autoStore_Login_PO.typeLoginForm(Cypress.env('automation_email'), Cypress.env('automation_password'));
        cy.wait(3000);
        autoStore_Login_PO.clickLoginButton();
        cy.wait(3000);
        autoStore_HairCare_PO.clickConfirmOder();

        cy.wait(3000);
        cy.get('#maincontainer').find('span').invoke('text').then((text) => {
            expect(text).to.equal(' Your Order Has Been Processed!');
        })
    });
});