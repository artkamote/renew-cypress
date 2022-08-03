import * as selectors from '../../../fixtures/selectors.json'
class AutoStore_Homepage_PO {
    clickOn_HairCare_Link(subNav) {        
        cy.get(selectors.homecare.subNav).contains(subNav).click();
    }
}
export default AutoStore_Homepage_PO; 