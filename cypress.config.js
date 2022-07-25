const { defineConfig } = require('cypress')
// process.env.HOST='https://automationteststore.com/'
// process.env.DEMOHOST='https://demo.realworld.io/#/settings'
// process.env.API_URL = 'https://api.realworld.io/api/users/login'
// process.env.EMAIL = '<YOUR EMAIL>'
// process.env.PASSWORD = '<YOUR PASSWORD>'

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
      defaultCommandTimeout: 30000,
      video: false,
    env: {
      'host': process.env.HOST,
      'demohost': process.env.DEMOHOST,
      'apiurl': process.env.API_URL,
      'email': process.env.EMAIL,
      'password': process.env.PASSWORD
    },
        setupNodeEvents(on, config) {
      console.log(config) // see everything in here!
      
      
      // IMPORTANT return the updated config object
      return config
    }
  }
})
