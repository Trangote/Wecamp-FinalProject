import {Login} from '../../pages/login/login'

describe('login account', () => {
  beforeEach(() => {
    cy.fixture("users.json").as("users");
  });

  it('Email and password are match to exist account in database', () => {
    cy.get('@users').then((user) => {
      cy.login(user[0]);
      cy.wait(1000);
      cy.url().should("include","/dashboard");
      cy.get("h4").should('be.visible');
      cy.get("h4").contains(user[0].firstname);
    })
  });
  it('Email is wrong', () => {
    cy.get('@users').then((user) => {
      cy.login(user[1]);
      cy.wait(1000);
      Login.getVisibleEmailWarning();
      Login.getNotFoundEmailWarning();
    })
  });
  it('Password is wrong', () => {
    cy.get('@users').then((user) => {
      cy.login(user[2]);
      cy.wait(1000);
      Login.getVisiblePasswordWarning();
      Login.getIncorrectPasswordWarning();
    })
  });
  it('Password field is empty', () => {
    cy.get('@users').then((user) => {
      cy.login(user[7]);
      cy.wait(1000);
      Login.getVisiblePasswordWarning();
      Login.getRequiredPasswordWarning();
    })
  });
  it('Email field is empty', () => {
    cy.get('@users').then((user) => {
      cy.login(user[8]);
      Login.getVisibleEmailWarning();
      Login.getRequiredEmailWarning();
    })
  });
  it('Email is not in email pattern ', () => {
    cy.get('@users').then((user) => {
      cy.login(user[3]);
      cy.wait(1000);
      Login.getVisibleEmailWarning();
      Login.getInvalidEmailWarning();
    })
  });
})