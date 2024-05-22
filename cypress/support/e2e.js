// cypress/support/index.js

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore ResizeObserver loop limit exceeded error
  if (err.message.includes('ResizeObserver loop completed with undelivered notifications')) {
    return false;
  }
  // Let Cypress fail the test for other errors
  return true;
});
