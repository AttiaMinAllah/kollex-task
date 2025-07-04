# Kollex Test Automation

Cypress test automation to register business and add merchant functionality tests

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Cypress
```bash
npm install cypress --save-dev
```

## Running Tests

### Run all tests (headless):
```bash
npx cypress run
```

### Open Cypress Test Runner (headed):
```bash
npx cypress open
```

### Run specific test files:
```bash
npx cypress run --spec "cypress/e2e/tests/add-merchant.cy.js"
```

## Test Coverage

### Covered Functionality:
- **Business registration form** - Complete registration flow with form validation
- **Merchant addition flow** - Search and select merchant functionality
- **Input validations** - Form field validation and error handling
- **Success confirmations** - Error message validation for duplicate customer IDs

### Known Limitations:
- **Merchant addition completion** - Cannot fully test successful merchant addition due to existing customer ID conflicts in test environment
- **Error handling** - Currently validates error message when customer ID already exists

## Test Files

- `cypress/e2e/tests/login.cy.js` - Login functionality tests
- `cypress/e2e/tests/add-merchant.cy.js` - Register business and add merchant functionality tests

