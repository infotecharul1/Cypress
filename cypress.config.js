const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false, // Disable automatic test running
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true, // Enable experimental Studio
    // Here you can specify other configurations related to e2e
  },
  // Removed the invalid syntax and added a proper start command
  start: {
    command: "npm start", // Command to start your server
    background: true, // Run the command in the background
  },
});
