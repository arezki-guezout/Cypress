const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // //generation de rapports avec mocha
  // reporter: 'cypress-mochawesome-reporter',
  //generation de rapports junit (*.xml)
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'cypress/reports/junit/my-test-output.xml',
    toConsole: true,
  },
  e2e: {
    // video: false,
    // screenshotsFolder: 'cypress/screenshots',
    // videosFolder: 'cypress/videos',
    setupNodeEvents(on, config) {
      // cette ligne concerne la génération de rapport mochawesome, 
      // cette ligne doit apparaitre avant le return config
      // require('cypress-mochawesome-reporter/plugin')(on);

      // cette ligne concerne l'utilisation des tags
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
