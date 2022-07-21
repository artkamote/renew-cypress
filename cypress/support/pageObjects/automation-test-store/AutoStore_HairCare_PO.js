const jsonElement = {
    "prod-68": {
      "image_url": "//automationteststore.com/image/thumbnails/18/6a/demo_product18_jpg-100013-500x500.jpg",
      "unique_id": "68",
      "quantity": 1,
      "unit_price": 42,
      "item_name": "Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15",
      "options": []
    }
  }
class AutoStore_HairCare_PO {
    addHairCareProductsToBasket() {
        // globalThis.data.productName.forEach(function (element) {
        //     cy.addProductToBasket(element);
        // });
        // cy.get('.dropdown-toggle > .fa').click();
        cy.log(JSON.stringify(jsonElement["prod-68"]))
        window.localStorage.setItem('neowize_last_actual_page', 'https://automationteststore.com/index.php?rt=checkout/cart')
        window.localStorage.setItem('neowize_last_cart', JSON.stringify(jsonElement["prod-68"]))
    }
}
export default AutoStore_HairCare_PO; 