import demo_productionReady_PO from "../../../support/pageObjects/demo-productionready/demo_productionReady_PO";

describe('Bypassing Login using localstorage', () => {
    let demo = new demo_productionReady_PO
    before(function () {
       cy.clear_session_storage();
       cy.getAndSetToken();
    })

    it('Should login on the application', () => {
        demo.visitSettingsPage();
        demo.typeOnBio();
    });
});