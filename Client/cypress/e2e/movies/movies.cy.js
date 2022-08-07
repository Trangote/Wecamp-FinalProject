import {Movie} from '../../pages/movies/movies'

describe('create movie', () => {
    beforeEach(() => {
      cy.fixture("users.json").as("users");
      cy.fixture("movies.json").as("movies");
      cy.get('@users').then((user) => {
        cy.login(user[0]);
        cy.url().should("include","/dashboard");
      });
    });
    //có bug
    it('Title is empty', () => {
      cy.get('@movies').then((movie) => {
        cy.addMovie(movie[3]);
        cy.wait(1000);
        cy.url().should("not.include","/movies");
        cy.get("h4").contains(movie[3].title).should('not.exist');
      })
    });
     //có bug
     it('Description is empty', () => {
      cy.get('@movies').then((movie) => {
        cy.addMovie(movie[4]);
        cy.wait(1000);
        cy.url().should("not.include","/movies");
        cy.get("h4").contains(movie[4].title).should('not.exist');
      })
    });
      //có bug
      it('ImgUrl is empty', () => {
        cy.get('@movies').then((movie) => {
          cy.addMovie(movie[5]);
          cy.wait(1000);
          cy.url().should("not.include","/movies");
          cy.get("h4").contains(movie[5].title).should('not.exist');
        })
      });
    //có bug
    it('You can not submit if you do not fill all inputs', () => {
        cy.get('@movies').then((movie) => {
          cy.addMovie(movie[0]);
          cy.wait(1000);
          cy.url().should("not.include","/movies");
          cy.get("h4").contains(movie[0].title).should('not.exist');
        })
    });
    //có bug
    it('Warning appear if you fill text in image field', () => {
      cy.get('@movies').then((movie) => {
        cy.addMovie(movie[1]);
        cy.url().should("not.include","/movies");
        cy.get("h4").contains(movie[1].title).should('not.exist');
      })
    });
    //có bug
    it('Warning appear if you add movie that exists in database', () => {
      cy.get('@movies').then((movie) => {
        cy.addMovie(movie[2]);
        cy.url().should("not.include","/movies");
        cy.get("h4").contains(movie[2].title).should('not.exist');
      })
    });
})