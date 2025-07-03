const registrationSelectors = {
  companyInput: '[data-testid="register-form-company"]',
  firstNameInput: '[data-testid="register-form-firstname"]',
  lastNameInput: '[data-testid="register-form-lastname"]',
  emailInput: '[data-testid="register-form-email"]',
  mobilePhoneInput: '[data-testid="register-form-mobilephone"]',
  termsCheckbox: '[data-testid="terms-condition-check"]',
  submitButton: '[data-testid="submit-registration"]',
  passwordInput: '[data-testid="reset-form-password"]',
  repeatPasswordInput: '[data-testid="reset-form-repeat-password"]',
  completePasswordButton: '[data-testid="complete-passsword"]',
  skipButton: 'button:has-text("Skip")',
  popupCloseButton: '[data-testid="cross"]',
  registerLink: "Register",
  skipButtonText: "Skip",
};

export default registrationSelectors;
