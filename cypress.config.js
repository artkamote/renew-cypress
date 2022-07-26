const { defineConfig } = require('cypress')
 process.env.HOST='https://automationteststore.com/'
 process.env.WEBDRIVERUNI='http://www.webdriveruniversity.com/'
 process.env.DEMOHOST='https://demo.realworld.io/#'
 process.env.API_URL = 'https://api.realworld.io/api/users/login'
 process.env.EMAIL = 'sample1234@gmail.com'
 process.env.PASSWORD = 'Welcome12345'

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
      'webdriveruniurl': process.env.WEBDRIVERUNI,
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
