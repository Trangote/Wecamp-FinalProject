import {Signup} from '../../pages/signup/signup'

describe('signup account', () => {
    beforeEach(() => {
      cy.fixture("users.json").as("users");
    });
    it('First name, last name, email, password is valid and email is not already exist in database', () => {
        cy.get('@users').then((user) => {
          cy.signup(user[4]);
          cy.url().should("include","/login");
          cy.get("h4").should('be.visible');
          cy.get("h4").contains("Login");
        })
    });
    it('Email is already exist in database', () => {
        cy.get('@users').then((user) => {
          cy.signup(user[0]);
          Signup.getVisibleEmailWarning();
          Signup.getExistEmailWarning();
        })
    });
    //có bug
    it('Password field is empty', () => {
        cy.get('@users').then((user) => {
          cy.signup(user[5]);
          Signup.getVisiblePasswordWarning();
          Signup.getRequiredPasswordWarning();
        })
    });
    it('The length of password is not enough', () => {
        cy.get('@users').then((user) => {
          cy.signup(user[6]);
          Signup.getVisiblePasswordWarning();
          Signup.getNotEnoughLengthPasswordWarning();
        })
    });
    it('Email is not in email pattern', () => {
        cy.get('@users').then((user) => {
          cy.signup(user[3]);
          Signup.getVisibleEmailWarning();
          Signup.getInvalidEmailWarning();
        })
    });
    it('Email field is empty', () => {
        cy.get('@users').then((user) => {
          cy.signup(user[9]);
          Signup.getVisibleEmailWarning();
          Signup.getRequiredEmailWarning();
        })
    });
    it('First name field is empty', () => {
        cy.get('@users').then((user) => {
          cy.signup(user[10]);
          Signup.getVisibleFirstnameWarning();
          Signup.getRequiredFirstnameWarning();
        })
    });
    it('Last name field is empty', () => {
        cy.get('@users').then((user) => {
          cy.signup(user[11]);
          Signup.getVisibleLastnameWarning();
          Signup.getRequiredLastnameWarning();
        })
    });

})