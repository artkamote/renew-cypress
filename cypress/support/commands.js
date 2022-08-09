// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
const compareSnapshotCommand = require('cypress-visual-regression/dist/command');

compareSnapshotCommand();
let LOCAL_STORAGE = {};

Cypress.Commands.add("saveLocalStorage", () => {
    Objects.keys(localstorage).forEach(key => {
        LOCAL_STORAGE[key] = localStorage[key];
    });
});

Cypress.Commands.add("restoreLocalStorage", () => {
    Objects.keys(localstorage).forEach(key => {
        localstorage.setItem(key, LOCAL_STORAGE[key]);
    });
});


Cypress.Commands.add("clear_session_storage", () => {
    cy.window().then((win) => {
        win.sessionStorage.clear();
    });
})

Cypress.Commands.add("navigateTo_Automation_Test_Store", () => {
    cy.visit("/");
})

Cypress.Commands.add("selectProduct", productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.wrap($el).click()
        }
    });
});

// This command is main function is to set and token so we can bypass the login
Cypress.Commands.add('getAndSetToken', (url, email, password) => {
    Cypress.log({
        message: 'Request token sents in local storage',
        displayName: 'GetToken'
    });
    cy.request({
        url,
        method: 'POST',
        body: {
            user: {
                // Hard coded for now for testing purposes only
                email,
                password
            }
        }
    }).then(response => {
        const {
            token
        } = response.body.user;
        window.localStorage.setItem('jwtToken', token)
    });
})

// This command add single product to the cart
Cypress.Commands.add('addProductToBasketViaApi', (value) => {
    cy.request("GET", Cypress.env('host') + value)
})

// This command Multiple products to UI
Cypress.Commands.add("addProductToBasket", productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if ($el.text() === productName) {
            cy.log($el.text())
            cy.get('.productcart').eq(index).click();
        }
    });

});

// This is for generic type on textbox
Cypress.Commands.add("typeOnTextBox", (element, value) => {
    cy.get(element).type(value)
})

// This is for button with chaining value
Cypress.Commands.add("clickElementByText", (element, tag, text) => {
    cy.get(element).find(tag).contains(text).click();
})

// This is for button clicking by id
Cypress.Commands.add("clickButtonById", (element) => {
    cy.get(element).click();
})

// This is for button clicking by id
Cypress.Commands.add("clickButtonById", (element) => {
    cy.get(element).click();
})

// This command for selecting value on the drop down with assertion
Cypress.Commands.add("selectByValue", (element, value) => {
    cy.get(element).select(value).should('have.value', value)
})

// This command is for the file upload
Cypress.Commands.add("fileUpload", (element, fileName) => {
    cy.get(element).attachFile(fileName)

})