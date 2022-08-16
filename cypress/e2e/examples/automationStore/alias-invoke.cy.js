const url = Cypress.env('host');
describe("Alias and invoke", () => {
    it("Validate a specific hair care product", () => {
        cy.visit(url);
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke("text").as("productThumbnail");
        cy.get("@productThumbnail").its("length").should("be.gt", 5);
        cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
    });

    it("Validate product thumbnail", () => {
        cy.visit(url);
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    });

    it.only('Calculate total of normal and sales products', () => {
        cy.visit(url)
        cy.get('.thumbnail').as('productThumbnail');
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //    cy.log($el.text());
        // });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0;
            var itemPrice = $linkText.split('$')
            for (let index = 0; index < itemPrice.length; index++) {
                cy.log(itemPrice[index]);
                itemPriceTotal += Number(itemPrice[index])
            }
            itemsTotal += itemPriceTotal;
            cy.log('Non sale price item total: ' + itemPriceTotal)
        });
        
        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPrice = 0;
            var saleItemPrice = $linkText.split('$')

            for (let index = 0; index < saleItemPrice.length; index++) {
                cy.log(saleItemPrice[index])
                saleItemsPrice += Number(saleItemPrice[index])

            }
            itemsTotal += saleItemsPrice;
            cy.log("Sale price items total: " + saleItemsPrice) 
        })
        .then(() => {
            cy.log("The total price of all products: " + itemsTotal)
            expect(itemsTotal).to.equal(662)
        })
    });
    
    it('Test for file upload', function (){

        //file to be uploaded path in project folder
        const p = 'Monitor.png'
  
        // launch URL
        cy.visit("https://the-internet.herokuapp.com/upload")
  
        //upload file with attachFile
        cy.fileUpload('#file-upload', p)
       
  
        //click on upload
        cy.get('#file-submit').click()
  
        //verify uploaded file
        cy.get('#uploaded-files').contains('Picture')
     });
});