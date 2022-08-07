import {Login} from '../pages/login/login';
import {Signup} from '../pages/signup/signup';
import {Movie} from '../pages/movies/movies';
import {Room} from '../pages/rooms/rooms';
import {Seanse} from '../pages/seanses/seanses';

const user_login = Cypress.env('user_login');
const user_signup = Cypress.env('user_signup');

Cypress.Commands.add('login', (user) => {
    cy.visit(user_login).wait(500);
    if(user.email){
        Login.typeEmail(user.email)
    }
    if(user.password){
        Login.typePassword(user.password)
    }
    Login.clickSubmit();
});
Cypress.Commands.add('signup', (user) => {
    cy.visit(user_signup).wait(500);
    if(user.firstname){
        Signup.typeFirstname(user.firstname)
    }
    if(user.lastname){
        Signup.typeLastname(user.lastname)
    }
    if(user.email){
        Signup.typeEmail(user.email)
    }
    if(user.password){
        Signup.typePassword(user.password)
    }
    Signup.clickSubmit();
});
Cypress.Commands.add('addMovie', (movie) => {
    Movie.clickAdd();
    if(movie.title){
        Movie.typeTitle(movie.title)
    }
    if(movie.movieDescription){
        Movie.typeDescription(movie.movieDescription)
    }
    if(movie.movieImgUrl){
        Movie.typeImgUrl(movie.movieImgUrl)
    }
    Movie.clickSubmit({force: true});
});
Cypress.Commands.add('addRoom', (room) => {
    Room.clickAdd();
    if(room.row){
        Room.clearRow();
        Room.typeRow(room.row)
    }
    if(room.col){
        Room.clearColumn();
        Room.typeColumn(room.col)
    }
    if(room.name){
        Room.typeName(room.name)
    }
    if(room.description){
        Room.typeDescription(room.description)
    }
    Room.clickSubmit({force: true});
});
Cypress.Commands.add('addSeanse', (seanse) => {
    Seanse.clickAdd();
    if(seanse.movieName && seanse.movie){
        Seanse.selectMovie(seanse.movieName, seanse.movie)
    }
    if(seanse.day){
        Seanse.selectDate(seanse.day)
    }
    if(seanse.hour){
        Seanse.typeHour(seanse.hour)
    }
    if(seanse.roomName && seanse.room){
        Seanse.selectRoom(seanse.roomName, seanse.room)
    }
    Seanse.clickSubmit({force: true});
});