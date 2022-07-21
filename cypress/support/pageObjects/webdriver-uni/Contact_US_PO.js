class Contact_US_PO {
    contactForm_Submission(firstname, lastname, email, comment, $selector, textToLocate)  {
        cy.get('[name="first_name"]').type(firstname);
        cy.get('[name="last_name"]').type(lastname);
        cy.get('[name="email"]').type(email);
        cy.get('textarea.feedback-input').type(comment);
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(textToLocate)
    };
}
export default Contact_US_PO; 