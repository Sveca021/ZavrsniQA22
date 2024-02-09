/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')

describe("Creating board functionality - Cypress Vivifyscrum", () => {

    beforeEach(() => {
        cy.visit("/login"),
            cy.get(locators.loginPage.emailInputField).type("jel.novkovic@gmail.com"),
            cy.get(locators.loginPage.passwordField).type("cranberries"),
            cy.get(locators.loginPage.submitButton).click();
        cy.wait(3000)

    });
    it("Successful adding of board", () => {

        cy.visit("/my-organizations"),

            cy.get(locators.createPage.addBoardField).click();
        cy.get(locators.createPage.newBoardTitleField).type("Board1"),
            cy.get(locators.createPage.nextButton).click();
        cy.get(locators.createPage.BoardType).click();
        cy.get(locators.createPage.nextButton).click();
        cy.get(locators.createPage.nextButton).click();
        cy.get(locators.createPage.nextButton).click();
        cy.get(locators.createPage.nextButton).click();
        cy.wait(4000)
        cy.get(locators.createPage.checkBoard).click();
        cy.wait(3000)
        cy.get(locators.createPage.clickFooter).click();






    });

});

