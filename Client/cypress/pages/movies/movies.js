export const Movie = {
    TXT_TITLE: "#title",
    TXT_DESCRIPTION: "#movieDescription",
    TXT_IMGURL: "#movieImgUrl",
    BTN_SUBMIT: "button[type=submit]",
    BTN_ADD: "ul > li:nth-child(2) > a",

    typeTitle(title){
        cy.get(this.TXT_TITLE).type(title);
    },
    typeDescription(description){
        cy.get(this.TXT_DESCRIPTION).type(description);
    },
    typeImgUrl(imgurl){
        cy.get(this.TXT_IMGURL).type(imgurl);
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