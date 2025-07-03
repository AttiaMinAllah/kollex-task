import loginSelectors from "../selectors/loginSelectors";
import languageSelectors from "../selectors/languageSelectors";

export function login(email, password) {
  cy.visit("/login");
  cy.get(loginSelectors.emailInput).type(email);
  cy.get(loginSelectors.passwordInput).type(password);
  cy.get(loginSelectors.loginButton).click();
}

export function changeLanguageToEnglish() {
  cy.get(languageSelectors.selectedLanguage).should("be.visible");
  cy.get(languageSelectors.selectedLanguage)
    .invoke("text")
    .then((lang) => {
      const trimmedLang = lang.trim();
      if (trimmedLang && ["Deutsch", "English"].includes(trimmedLang)) {
        if (trimmedLang === "Deutsch") {
          cy.get(languageSelectors.selectedLanguage).click();
          cy.get(languageSelectors.englishRadio).click();
          cy.get(languageSelectors.confirmLanguageChange).click();
          cy.get(languageSelectors.selectedLanguage).should(
            "have.text",
            "English",
          );
        }
      }
    });
}
