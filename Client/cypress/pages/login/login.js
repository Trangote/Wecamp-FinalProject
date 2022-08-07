export const Login ={
TXT_EMAIL: "#email",
TXT_PASSWORD: "#password" ,
TXT_WARNING: ".red-text",
BTN_SUBMIT: "button[type=submit]",
    typeEmail(email){
        cy.get(this.TXT_EMAIL).type(email);
    },
    typePassword(password){
        cy.get(this.TXT_PASSWORD).type(password);
    },
    getVisibleEmailWarning(){
        cy.get(this.TXT_EMAIL).siblings(this.TXT_WARNING).should('be.visible');
    },
    getVisiblePasswordWarning(){
        cy.get(this.TXT_PASSWORD).siblings(this.TXT_WARNING).should('be.visible');
    },
    getNotFoundEmailWarning(){
        cy.get(this.TXT_EMAIL).siblings(this.TXT_WARNING).contains("Email not found");
    },
    getRequiredEmailWarning(){
        cy.get(this.TXT_EMAIL).siblings(this.TXT_WARNING).contains("Email field is required");
    },
    getInvalidEmailWarning(){
        cy.get(this.TXT_EMAIL).siblings(this.TXT_WARNING).contains("Email is invalid");
    },
    getIncorrectPasswordWarning(){
        cy.get(this.TXT_PASSWORD).siblings(this.TXT_WARNING).contains("Password incorrect");
    },
    getRequiredPasswordWarning(){
        cy.get(this.TXT_PASSWORD).siblings(this.TXT_WARNING).contains("Password field is required");
    },
    clickSubmit(){
        cy.get(this.BTN_SUBMIT).click();
    }
}