/// <reference types="cypress" />

describe("Login to orange HRM", ()=>{

    beforeEach("visiter le lien", ()=>{
        const env_cible = Cypress.env("environment");
        switch (env_cible) {
            case "dev":
                //mettre l'url de l'env de dev
                url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
                break
            case "prod":
                //mettre l'url de l'env de prod
                url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
                break
            default:
                //mettre l'url de l'env de dev
                url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
                break
        }
        cy.visit(url)
    })
    context("scenario positif alpha", {tags: '@positive'}, ()=>{
        it("login success", ()=>{
            cy.get("input[name=username]").type("Admin")
            cy.get("input[name=password]").type("admin123")
            cy.get("button[type=submit]").click()
            cy.get(".oxd-topbar-header-title").should("be.visible")
        })
    })

    context("scenario negatif gamma", {tags: '@negative'}, ()=>{
        it("wrong username alpha", ()=>{
            cy.get("input[name=username]").type("Admin_error")
            cy.get("input[name=password]").type("admin123")
            cy.get("button[type=submit]").click()
            cy.get("div.oxd-alert.oxd-alert--error").should("be.visible")
        })

        it("wrong password beta", ()=>{
            cy.get("input[name=username]").type('Admin')
            cy.get("input[name=password]").type('admin123_error')
            cy.get("button[type=submit]").click()
            cy.get("div.oxd-alert.oxd-alert--error").should("be.visible")
        })
    })
})