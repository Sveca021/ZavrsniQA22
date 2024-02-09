/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')

describe("Login functionality - Cypress VivifyScrum", () => {
    it("Successful login", () => {
        cy.visit("/login")

        cy.get(locators.loginPage.emailInputField).type("jel.novkovic@gmail.com"),
            cy.get(locators.loginPage.passwordField).type("cranberries"),
            cy.get(locators.loginPage.submitButton).click();
    });
    it("Unsuccessful login - wrong password", () => {
        cy.visit("/login");

        cy.get(locators.loginPage.emailInputField).type("jel.novkovic@gmail.com")
        cy.get(locators.loginPage.passwordField).type("Sveca123")
        cy.get(locators.loginPage.submitButton).click();
    });
    it("Unsuccessful login - wrong email", () => {
        cy.visit("/login");

        cy.get(locators.loginPage.emailInputField).type("jel.novkovic123@gmail.com")
        cy.get(locators.loginPage.passwordField).type("cranberries")
        cy.get(locators.loginPage.submitButton).click();

    });

});