const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter : 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 6000,
  env: 
  {
    url : "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
        require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
