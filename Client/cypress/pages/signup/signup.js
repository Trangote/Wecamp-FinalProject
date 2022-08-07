export const Signup = {
    TXT_FIRSTNAME: "#first_name",
    TXT_LASTNAME: "#last_name",
    TXT_EMAIL: "#email",
    TXT_PASSWORD: "#password",
    TXT_WARNING: ".red-text",
    BTN_SUBMIT: "button[type=submit]",
    typeFirstname(firstname) {
        cy.get(this.TXT_FIRSTNAME).type(firstname);
    },
    typeLastname(lastname) {
        cy.get(this.TXT_LASTNAME).type(lastname);
    },
    typeEmail(email) {
        cy.get(this.TXT_EMAIL).type(email);
    },
    typePassword(password) {
        cy.get(this.TXT_PASSWORD).type(password);
    },
    getVisibleEmailWarning() {
        cy.get(this.TXT_EMAIL).siblings(this.TXT_WARNING).should('be.visible');
    },
    getVisiblePasswordWarning() {
        cy.get(this.TXT_PASSWORD).siblings(this.TXT_WARNING).should('be.visible');
    },
    getVisibleFirstnameWarning() {
        cy.get(this.TXT_FIRSTNAME).siblings(this.TXT_WARNING).should('be.visible');
    },
    getVisibleLastnameWarning() {
        cy.get(this.TXT_LASTNAME).siblings(this.TXT_WARNING).should('be.visible');
    },
    getRequiredFirstnameWarning() {
        cy.get(this.TXT_FIRSTNAME).siblings(this.TXT_WARNING).contains('First name field is required');
    },
    getRequiredLastnameWarning() {
        cy.get(this.TXT_LASTNAME).siblings(this.TXT_WARNING).contains('Last name field is required');
    },
    getRequiredPasswordWarning() {
        cy.get(this.TXT_PASSWORD).siblings(this.TXT_WARNING).contains('Password field is required');
    },
    getNotEnoughLengthPasswordWarning() {
        cy.get(this.TXT_PASSWORD).siblings(this.TXT_WARNING).contains('Password must be at least 6 characters');
    },
    getRequiredEmailWarning() {
        cy.get(this.TXT_EMAIL).siblings(this.TXT_WARNING).contains('Email field is required');
    },
     getInvalidEmailWarning(){
        cy.get(this.TXT_EMAIL).siblings(this.TXT_WARNING).contains("Email is invalid");
    },
    getExistEmailWarning() {
        cy.get(this.TXT_EMAIL).siblings(this.TXT_WARNING).contains("Email already exists");
    },
    clickSubmit() {
        cy.get(this.BTN_SUBMIT).click();
    }
}