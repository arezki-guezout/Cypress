/// <reference types="cypress" />

describe("Login to orange HRM", ()=>{
    it("login success", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name=username]").type("Admin")
        cy.get("input[name=password]").type("admin123")
        cy.get("button[type=submit]").click()
        cy.get(".oxd-topbar-header-title").should("be.visible")
    })

    it("login error", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name=username]").type("Admin_error")
        cy.get("input[name=password]").type("admin123")
        cy.get("button[type=submit]").click()
        cy.get("div.oxd-alert.oxd-alert--error").should("be.visible")
    })
})