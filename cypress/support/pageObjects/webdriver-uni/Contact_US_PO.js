class Contact_US_PO {
    contactForm_Submission(firstname, lastname, email, comment, $selector, textToLocate)  {
        cy.typeOnTextBox('[name="first_name"]', firstname)
        cy.typeOnTextBox('[name="last_name"]', lastname)
        cy.typeOnTextBox('[name="email"]', email)
        cy.typeOnTextBox('textarea.feedback-input', comment)
        cy.get('[type="submit"]').click();
        cy.get($selector).contains(textToLocate)
    };
}
export default Contact_US_PO; 