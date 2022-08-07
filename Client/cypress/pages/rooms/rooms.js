export const Room = {
    TXT_ROW: "#rows",
    TXT_COLUMN: "#columns",
    TXT_NAME: "#roomName",
    TXT_DESCRIPTION: "#roomDescription",
    BTN_SUBMIT: "button[type=submit]",
    BTN_ADD: "ul > li:first > a",

    typeRow(row){
        cy.get(this.TXT_ROW).type(row);
    },
    clearRow(){
        cy.get(this.TXT_ROW).clear();
    },
    typeColumn(column){
        cy.get(this.TXT_COLUMN).type(column);
    },
    clearColumn(){
        cy.get(this.TXT_COLUMN).clear();
    },
    typeName(name){
        cy.get(this.TXT_NAME).type(name);
    },
    typeDescription(description){
        cy.get(this.TXT_DESCRIPTION).type(description);
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