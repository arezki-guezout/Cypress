/// <reference types="cypress" />

describe("Login to orange HRM", ()=>{

    beforeEach("visiter le lien", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })

    it("login success", ()=>{
        //const credentialFile = Cypress.env("fixture") || "credentials";
        //cy.fixture(credentialFile).then((user) => {
        cy.fixture("credentials1").then((user) => {
        cy.get("input[name=username]").type(user.name)
        cy.get("input[name=password]").type(user.pass)
        cy.get("button[type=submit]").click()
        if (user.result === "OK")
            cy.get(".oxd-topbar-header-title").should("be.visible")
        else
            cy.get("div.oxd-alert.oxd-alert--error").should("be.visible")
        })  
    })
})
