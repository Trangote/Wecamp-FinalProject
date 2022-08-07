import {Seanse} from '../../pages/seanses/seanses'

describe('create seanse', () => {
    beforeEach(() => {
      cy.fixture("users.json").as("users");
      cy.fixture("seanses.json").as("seanses");
      cy.get('@users').then((user) => {
        cy.login(user[0]);
        cy.url().should("include","/dashboard");
      });
    });
    //có bug
    it('Select movie value is empty', () => {
        cy.get('@seanses').then((seanse) => {
          cy.addSeanse(seanse[0]);
          cy.wait(1000);
          cy.url().should("not.include","/seanses");
        })
    });
    //có bug
    it('Choose the seanse date in the past', () => {
        cy.get('@seanses').then((seanse) => {
          cy.addSeanse(seanse[1]);
          cy.wait(1000);
          cy.url().should("not.include","/seanses");
        })
    });
    it('Type text in hour field', () => {
        cy.get('@seanses').then((seanse) => {
          cy.addSeanse(seanse[2]);
          cy.wait(1000);
          cy.url().should("not.include","/seanses");
        })
    });
    it('Type Negetive number in hour field', () => {
        cy.get('@seanses').then((seanse) => {
          cy.addSeanse(seanse[3]);
          cy.wait(1000);
          cy.url().should("not.include","/seanses");
        })
    });
    it('Type Special character in hour field', () => {
        cy.get('@seanses').then((seanse) => {
          cy.addSeanse(seanse[4]);
          cy.wait(1000);
          cy.url().should("not.include","/seanses");
        })
    });
    it('Select room value is empty', () => {
        cy.get('@seanses').then((seanse) => {
          cy.addSeanse(seanse[5]);
          cy.wait(1000);
          cy.url().should("not.include","/seanses");
        })
    });
})