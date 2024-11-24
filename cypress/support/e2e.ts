import './commands';

Cypress.on('uncaught:exception', (error: Error) => {
  if (error.message.includes('Script error.')) {
    console.warn('Script error encountered:', error);
  }

  return false;
});
