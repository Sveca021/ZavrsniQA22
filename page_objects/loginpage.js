class Loginpage {

    get emailInputField() {
        return cy.get("#email");
    }
    get passwordInputField() {
        return cy.get("#password");
    }
    get submitBtn() {
        return cy.get("button");
    }
}

export const loginPage = new loginPage();
