const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const { addCucumberPreprocessorPlugin,} = require("@badeball/cypress-cucumber-preprocessor");
const { preprendTransformerToOptions, } = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // implement node event listeners here
  //require('cypress-mochawesome-reporter/plugin')(on);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;

}
module.exports = defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 6000,
  env: {
    url: "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/*.js' // Added comma
    // specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
  // If "module" is an intended setting, it should be placed within a relevant configuration object, like parserOptions:
  parserOptions: {
    sourceType: "module",
    module: true
  }
});



//messages -> json file -> html
