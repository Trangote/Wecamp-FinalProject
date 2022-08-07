export const Seanse = {
    LST_MOVIE: "#exampleFormControlSelect1",
    TXT_DATE: "#columns",
    TXT_HOUR: "#hour",
    LST_ROOM: "#room",
    BTN_SUBMIT: "button[type=submit]",
    BTN_ADD: "ul > li:nth-child(3) > a",

    typeHour(hour){
        cy.get(this.TXT_HOUR).type(hour);
    },
    selectMovie(movie, value){
        cy.get(this.LST_MOVIE).select(movie).should('have.value', value);
    },
    selectRoom(room, value){
        cy.get(this.LST_ROOM).select(room).should('have.value', value);
    },
    selectDate(day){
        cy.get(`.react-datepicker__input-container > input`).click();
        cy.wait(1000);
        cy.get(`.react-datepicker__day--0${day}`).click();
    },
    clickAdd(){
        cy.get(this.BTN_ADD).invoke('attr','href').then(href => {
            cy.visit(href);
        });
    },
    clickSubmit(){
        cy.get(this.BTN_SUBMIT).click();
    }
}