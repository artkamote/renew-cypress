const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
      defaultCommandTimeout: 30000,
      videoCompression: false,
    env: {
      //'https://automationteststore.com/'
      'host' : process.env.HOST
    },
        setupNodeEvents(on, config) {
      console.log(config) // see everything in here!
      
      
      // IMPORTANT return the updated config object
      return config
    }
  }
})
