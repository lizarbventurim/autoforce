const { defineConfig } = require("cypress")
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://autoforce-academy.pilotodetestes.com.br/ddm-fiat-v2-dois/",
    defaultBrowser: "electron",
    failOnStatusCode: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config)
      return config
    },
  },
})
