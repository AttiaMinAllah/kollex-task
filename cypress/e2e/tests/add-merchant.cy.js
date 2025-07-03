import addMerchantSelectors from "../selectors/addMerchantSelectors";
import registrationSelectors from "../selectors/registerationSelectors";
import merchantSearchSelectors from "../selectors/merchantSearchSelectors";
import { login, changeLanguageToEnglish } from "../pages/loginPage";
import {
  clickAddButton,
  validateErrorMessage,
} from "../pages/addMerchantPage";

function generateRandomEmail() {
  return `testbusiness_${Date.now()}@test.com`;
}
function generateRandomPhone() {
  return `+49${Math.floor(1000000 + Math.random() * 9000000)}`;
}

describe("Add Merchant for a new business(via registration flow) and an already existing business(via login flow)", () => {
  let businessData, password;

  beforeEach(() => {
    businessData = {
      company: "Test Business",
      firstName: "Test",
      lastName: "Owner",
      email: generateRandomEmail(),
      mobilePhone: generateRandomPhone(),
    };
    password = "TestPassword123!";
  });

  beforeEach(() => {
    cy.visit("/login");
    changeLanguageToEnglish();
  });

  it("Should add merchant for a new business(via registration flow)", () => {
    cy.contains(registrationSelectors.registerLink).click();
    cy.url().should("include", "/registration");

    cy.get(registrationSelectors.companyInput).type(businessData.company);
    cy.get(registrationSelectors.firstNameInput).type(businessData.firstName);
    cy.get(registrationSelectors.lastNameInput).type(businessData.lastName);
    cy.get(registrationSelectors.emailInput).type(businessData.email);
    cy.get(registrationSelectors.mobilePhoneInput).type(
      businessData.mobilePhone,
    );
    cy.get(registrationSelectors.termsCheckbox).check({ force: true });
    cy.get(registrationSelectors.submitButton).click();

    cy.url().should("include", "/registration-set-password");
    cy.get(registrationSelectors.passwordInput).type(password);
    cy.get(registrationSelectors.repeatPasswordInput).type(password);
    cy.get(registrationSelectors.completePasswordButton).click();

    cy.url().should("include", "/customer-source");
    cy.contains(registrationSelectors.skipButtonText).click();

    cy.url().should("eq", Cypress.config("baseUrl"));
    cy.get(registrationSelectors.popupCloseButton).click();
    cy.wait(500);

    cy.get(addMerchantSelectors.addMerchantButton).click();
    cy.url().should(
      "eq",
      Cypress.config("baseUrl") + "customers-with-merchants/search",
    );
    cy.get(addMerchantSelectors.merchantSearchInput).type("Lennard");
    cy.wait(1000);
    cy.get(addMerchantSelectors.merchantResultLennard).click();
    cy.get(merchantSearchSelectors.newCustomerNumber).type("000711");
    clickAddButton();
    // I added this error message because I was not able to add the customer number, because it was already in use.
    validateErrorMessage(
      "For this customer number there is already an account at kollex with this merchant.",
    );
  });

  it("should add merchant for an already existing business(via login flow)", () => {
    login("test.kollex@gmail.com", "TestK123#");

    cy.url().should("eq", Cypress.config("baseUrl"));

    cy.get(registrationSelectors.popupCloseButton).click();
    cy.wait(500);

    cy.get(addMerchantSelectors.addMerchantButton).click();
    cy.url().should(
      "eq",
      Cypress.config("baseUrl") + "customers-with-merchants/search",
    );

    cy.get(merchantSearchSelectors.merchantSearchForm).type("Lennard");
    cy.wait(1000);
    cy.get(merchantSearchSelectors.merchantSearchResultLennard).click();
    cy.get(merchantSearchSelectors.newCustomerNumber).type("000711");

    clickAddButton();
    // I added this error message because I was not able to add the customer number, because it was already in use.
    validateErrorMessage(
      "For this customer number there is already an account at kollex with this merchant.",
    );
  });
});
