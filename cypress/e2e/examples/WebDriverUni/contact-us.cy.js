import HomePage_PO from '../../../support/pageObjects/webdriver-uni/Homepage_PO';
import Contact_Us_PO from '../../../support/pageObjects/webdriver-uni/Contact_US_PO';

describe("Test Contact Us form via WebdriverUni", () => {
    const contact_Us_PO = new Contact_Us_PO();
    const homePage_PO = new HomePage_PO();

    before(function () {
        cy.fixture('example').then(function (data) {
            globalThis.data = data;
        })
    })

    beforeEach(function () {
        cy.clear_session_storage();
        homePage_PO.visitHomePage();
    });

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        contact_Us_PO.contactForm_Submission(data.name, data.name, data.email, data.body, 'h1', 'Thank You for your Message!')
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        contact_Us_PO.contactForm_Submission(data.name, data.name, " ", data.body, 'body', 'Error: Invalid email address')
    });
})