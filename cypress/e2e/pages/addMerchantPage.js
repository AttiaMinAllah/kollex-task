import addMerchantSelectors from "../selectors/addMerchantSelectors";

export function clickAddMerchant() {
  cy.get(addMerchantSelectors.addMerchantButton).click();
}

export function searchAndSelectMerchant(merchantName) {
  cy.get(addMerchantSelectors.merchantSearchInput).type(merchantName);
  cy.wait(1000);
  cy.get(addMerchantSelectors.merchantResultLennard).click();
}

export function fillCustomerNumber(customerNumber) {
  cy.get(addMerchantSelectors.customerNumberInput).type(customerNumber);
}

export function clickAddButton() {
  cy.get(addMerchantSelectors.addButton).click();
}

export function validateErrorMessage(expectedMessage) {
  cy.get(addMerchantSelectors.errorMessage)
    .should("be.visible")
    .and("contain.text", expectedMessage);
}
