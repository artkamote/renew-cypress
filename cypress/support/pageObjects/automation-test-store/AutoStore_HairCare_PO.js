import * as selectors from '../../../fixtures/selectors.json'

class AutoStore_HairCare_PO {
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function (element) {
            cy.addProductToBasket(element);
        });
        cy.log('Add multiple items to cart')
        cy.clickButtonById(selectors.homecare.dropDownToggle);       
    }

    clickCheckout() {
      cy.log('Click Checkout button');
      cy.clickButtonById(selectors.homecare.cartCheckout);      
    }

    clickConfirmOder() {
        cy.log('Click checkout button');
        cy.clickButtonById(selectors.homecare.checkoutButton);
    }
}
export default AutoStore_HairCare_PO; 