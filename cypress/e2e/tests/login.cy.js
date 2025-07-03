/// <reference types="cypress" />

import loginSelectors from "../selectors/loginSelectors";
import { login } from "../pages/loginPage";

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("should navigate to login page successfully", () => {
    cy.url().should("include", "/login");
    cy.get(loginSelectors.emailInput).should("be.visible");
    cy.get(loginSelectors.passwordInput).should("be.visible");
    cy.get(loginSelectors.loginButton).should("be.visible");
  });

  it("should login successfully with valid credentials", () => {
    login("test.kollex@gmail.com", "TestK123#");
    cy.url().should("eq", Cypress.config("baseUrl"));
  });
});
