describe('Post Request', () => {
    it.only('post Request', () => {
        cy.getAndSetToken(Cypress.env('apiurl'), Cypress.env('email'), Cypress.env('password')).then((res) => {
            cy.request({
                method: "POST",
                url: Cypress.env('api_realworld') + 'articles',
                headers: {
                    accept: "application/json",
                    authorization: "Token" + ' ' + res.body.user.token
                },
                body: {
                    "article": {
                        "title": "test article of post 5",
                        "description": "testing only",
                        "body": "this is a test article only",
                        "tagList": []
                    }
                }
            }).then(response => {
                expect(response.body.article.title).to.eql("test article of post 5");
                cy.request({
                    method: "DELETE",
                    url: Cypress.env('api_realworld') + 'articles/test-article-of-post-5-67598',
                    headers: {
                        accept: "application/json",
                        authorization: "Token" + ' ' + res.body.user.token
                    }
                }).then(response => {
                    expect(response.status).to.eql(200);
                })
            })
        })
    })
})