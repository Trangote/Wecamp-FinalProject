import {Room} from '../../pages/rooms/rooms'

describe('create room', () => {
    beforeEach(() => {
      cy.fixture("users.json").as("users");
      cy.fixture("rooms.json").as("rooms");
      cy.get('@users').then((user) => {
        cy.login(user[0]);
        cy.url().should("include","/dashboard");
      });
    });
    //có bug
    it('Warning appear if you fill negative number in room and columns field', () => {
        cy.get('@rooms').then((room) => {
          cy.addRoom(room[0]);
          cy.wait(1000);
          cy.get("h3").should('be.visible');
          cy.get("h3").contains(room[0].name);
          Room.clickSubmit();
          cy.wait(1000);
          cy.url().should("not.include","/rooms");
        })
    });
    //có bug
      it('Roomname field is empty', () => {
        cy.get('@rooms').then((room) => {
          cy.addRoom(room[1]);
          cy.wait(1000);
          Room.clickSubmit();
          cy.wait(1000);
          cy.url().should("not.include","/rooms");
        })
    });
    //có bug
    it('Row field is empty', () => {
        cy.get('@rooms').then((room) => {
          cy.addRoom(room[2]);
          cy.wait(1000);
          Room.clickSubmit();
          cy.wait(1000);
          cy.url().should("not.include","/rooms");
        })
    });
    //có bug
    it('Column field is empty', () => {
        cy.get('@rooms').then((room) => {
          cy.addRoom(room[3]);
          cy.wait(1000);
          Room.clickSubmit();
          cy.wait(1000);
          cy.url().should("not.include","/rooms");
        })
    });
    //có bug
    it.only('Warning appear if you add room that exists in database', () => {
        cy.get('@rooms').then((room) => {
          cy.addRoom(room[4]);
          cy.wait(1000);
          Room.clickSubmit();
          cy.wait(1000);
          cy.url().should("not.include","/rooms");
        })
    });
})