const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false, // Disable automatic test running
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true, // Enable experimental Studio
  },
});
