class AutoStore_HairCare_PO {
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function (element) {
            cy.addProductToBasket(element);
        });
        cy.log('Add multiple items to cart')
        cy.get('.dropdown-toggle > .fa').click();
       
    }

    clickCheckout() {
      cy.log('Click Checkout button');
      cy.get('#cart_checkout1').click();
    }

    clickConfirmOder() {
        cy.log('Click checkout button');
        cy.get('#checkout_btn').click();
    }
}
export default AutoStore_HairCare_PO; 