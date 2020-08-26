/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const cucumber = require("cypress-cucumber-preprocessor").default
const path = require("path")
const webpackPreprocessor = require("@cypress/webpack-preprocessor")
const babelConfig = require("../../babel.config.js")

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  if (config.env.suite === "unit") {
    require("@cypress/code-coverage/task")(on, config)
    // We have to add our own webpack preprocessor, since gatsby contains
    // un-transpiled ES6 code.
    on(
      "file:preprocessor",
      webpackPreprocessor({
        webpackOptions: {
          resolve: {
            alias: {
              react: path.resolve("./node_modules/react"),
            },
          },
          mode: "development",
          devtool: false,
          module: {
            rules: [
              {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                options: babelConfig,
              },
              {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: ["style-loader", "css-loader"],
              },
            ],
          },
        },
        watchOptions: {},
      })
    )
  } else {
    on("file:preprocessor", cucumber())
  }
  return config
}
