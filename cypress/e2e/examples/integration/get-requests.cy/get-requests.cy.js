

describe('Get Request', () =>{
    var result;
    var api = '/articles?limit=10&offset=0&tag=welcome';
    it('Validate status code of the /articles api', () => {
        result = cy.request(Cypress.env('api_realworld') + api)
        result.its("status").should("equal", 200);
    })

    it('Validate /articles api contains the correct keys and values', () => {
       cy.request({
            method: "GET",
            url: Cypress.env('api_realworld') + api,
            headers: {
                accept: "application/json"
            }
       }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            cy.log(body.articles[0].author.username);

            expect(body.articles[0]).has.property("title", "Welcome to RealWorld project");
            expect(body.articles[0].author).has.property("username", "Gerome");
       })
    })
})
