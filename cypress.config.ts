import {defineConfig} from 'cypress';
import * as cypressSecrets from './cypress.env.json';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.arkadium.com/',
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 30000,
    requestTimeout: 30000,
    responseTimeout: 30000,
    testIsolation: true,
    viewportWidth: 1920,
    viewportHeight: 1080,
    supportFile: false,
    specPattern: [
      '**/e2e/**/*.cy.ts',
    ]
  },

  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: '[name].html',
    overwrite: true,
    html: true,
    json: false,
    toConsole: true,
    charts: true,
    embeddedScreenshots: true
  },

  env: {
    email: cypressSecrets.email,
    password: cypressSecrets.password
  }
});
