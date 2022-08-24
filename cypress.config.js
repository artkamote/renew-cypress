const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

  // process.env.HOST = 'https://automationteststore.com/'
  // process.env.WEBDRIVERUNI = 'http://www.webdriveruniversity.com/'
  // process.env.DEMOHOST = 'https://demo.realworld.io/#'
  // process.env.API_URL = 'https://api.realworld.io/api/users/login'
  // process.env.EMAIL = 'sample1234@gmail.com'
  // process.env.PASSWORD = 'Welcome12345'
  // process.env.AUTOMATIONSTORE_EMAIL = 'pabloqa123'
  // process.env.AUTOMATIONSTORE_PASSWORD = '123456'
  // process.env.THRESHOLD = 0.01
  // process.env.PROJECTID="b8reto"
  // process.env.API_REALWORLD="https://api.realworld.io/api/"

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    defaultCommandTimeout: 30000,
    video: false,
  screenshotsFolder: "./cypress/snapshots/actual/",
  trashAssetsBeforeRuns: true,
  projectId: process.env.PROJECTID,
    env: {
      'host': process.env.HOST,
      'demohost': process.env.DEMOHOST,
      'apiurl': process.env.API_URL,
      'webdriveruniurl': process.env.WEBDRIVERUNI,
      'email': process.env.EMAIL,
      'password': process.env.PASSWORD,
      'automation_email': process.env.AUTOMATIONSTORE_EMAIL,
      'automation_password': process.env.AUTOMATIONSTORE_PASSWORD,
      'failSilently': false,
      'api_realworld': process.env.API_REALWORLD
    },
    setupNodeEvents(on, config) {
      console.log(config) // see everything in here!
      allureWriter(on, config);
      getCompareSnapshotsPlugin(on, config);

      // IMPORTANT return the updated config object
      return config
    }
  },
})
