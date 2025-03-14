const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    video: true,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    setupNodeEvents(on, config) {
      // cette ligne concerne la génération de rapport mochawesome, 
      // cette ligne doit apparaitre avant le return config
      require('cypress-mochawesome-reporter/plugin')(on);

      // cette ligne concerne l'utilisation des tags
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});
