import AutoStore_HomePage_PO from '../../../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO'
import AutoStore_HairCare_PO from '../../../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO'

describe("Add multiple items to basket", () => {
    const autoStore_Homepage_PO = new AutoStore_HomePage_PO();
    const autoStore_HairCare_PO = new AutoStore_HairCare_PO();

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
    });

    it.only("Add specific items to basket", () => {
        //cy.visit('https://automationteststore.com/')
        console.log('process', process.env.HOST)
        console.log('Cypress.env', Cypress.env('host'))

        cy.visit(Cypress.env('host'))
        cy.window().then(({ app }) => {
            console.log(app);
        })
    })
});