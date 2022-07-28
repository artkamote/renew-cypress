const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const { initPlugin } = require('cypress-plugin-snapshots/plugin');

  process.env.HOST = 'https://automationteststore.com/'
  process.env.WEBDRIVERUNI = 'http://www.webdriveruniversity.com/'
  process.env.DEMOHOST = 'https://demo.realworld.io/#'
  process.env.API_URL = 'https://api.realworld.io/api/users/login'
  process.env.EMAIL = 'sample1234@gmail.com'
  process.env.PASSWORD = 'Welcome12345'
  process.env.THRESHOLD = 0.01

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    defaultCommandTimeout: 30000,
    video: false,
    excludeSpecPattern : [
      "**/__snapshots__/*",
      "**/__image_snapshots__/*"
    ],

    env: {
      'host': process.env.HOST,
      'demohost': process.env.DEMOHOST,
      'apiurl': process.env.API_URL,
      'webdriveruniurl': process.env.WEBDRIVERUNI,
      'email': process.env.EMAIL,
      'password': process.env.PASSWORD,
      'cypress-plugin-snapshots': {
        "imageConfig": {
          "threshold": process.env.THRESHOLD
        }
      }
    },
    setupNodeEvents(on, config) {
      console.log(config) // see everything in here!
      allureWriter(on, config);
      initPlugin(on, config);

      // IMPORTANT return the updated config object
      return config
    }
  },
})
