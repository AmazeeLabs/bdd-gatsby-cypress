// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands"

if (Cypress.env("suite") === "unit") {
  // Gatsby's Link overrides:
  // Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
  // This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
  // so Gatsby Link doesn't throw any errors.
  global.___navigate = () => {}
  global.___loader = {
    enqueue: () => {},
    hovering: () => {},
  }
  // __PATH_PREFIX__ is used inside gatsby-link an other various places. For storybook not to crash, you need to set it as well.
  global.__PATH_PREFIX__ = ""

  require("cypress-react-unit-test/support")
  require("@cypress/code-coverage/support")
}
