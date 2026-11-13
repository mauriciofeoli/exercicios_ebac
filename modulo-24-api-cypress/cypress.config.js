const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    reportPageTitle: 'Hub de Leitura - API Tests'
  },
  e2e: {
    baseUrl: 'http://localhost:3002'
  }
})
