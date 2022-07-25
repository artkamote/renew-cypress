const { defineConfig } = require('cypress')
//process.env.HOST='https://automationteststore.com/'
//process.env.DEMOHOST='https://demo.realworld.io/#/settings'

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
      defaultCommandTimeout: 30000,
      videoCompression: false,
    env: {
      'host' : process.env.HOST,
      'demohost' : process.env.DEMOHOST
    },
        setupNodeEvents(on, config) {
      console.log(config) // see everything in here!
      
      
      // IMPORTANT return the updated config object
      return config
    }
  }
})
