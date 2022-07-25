const url = Cypress.env('host')
describe("Iterate over elements", () => {
  beforeEach(function () {
    cy.visit(url);
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();
  });

  it("Log information of all hair care products", () => {

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text())
    });
  });

  it("Add specific product to basket", () => {
    cy.selectProduct('Curls to straight Shampoo');
  });

  it("Add another specific product to basket", () => {
    cy.selectProduct('Seaweed Conditioner');
  });

  it("Click the third product", () => {
    cy.selectProduct('Eau Parfumee au The Vert Shampoo');
  });
});  