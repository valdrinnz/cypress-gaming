// / <reference types="cypress" />
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/method-signature-style */

Cypress.Commands.add('goToHomePage', () => {
  cy.visit('/');
});

Cypress.Commands.add('clickBestGames', () => {
  cy.get('[data-testid="Best"]').click();
});

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      goToHomePage(): Chainable<void>;
      clickBestGames(): Chainable<void>;
    }
  }
}
