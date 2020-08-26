const {
  Given,
  When,
  Then,
  But,
} = require("cypress-cucumber-preprocessor/steps")
const actor = require("../screenplay/actor")
const tasks = require("../screenplay/tasks")
const questions = require("../screenplay/questions")

Given(/^all example projects are loaded into the system$/, function() {
  // Nothing to do here, data is already loaded into mock server.
})

Given(/^the user has requested the project overview$/, function() {
  actor.perform(tasks.visitProjectsOverview)
})

Then(/^the list of projects should contain "([^"]*)"$/, function(name) {
  actor.ask(questions.readProjects, undefined, projects => {
    expect(projects.map(project => project.name)).to.contain(name)
  })
})

Then(/^the list of projects should not contain "([^"]*)"$/, function(name) {
  actor.ask(questions.readProjects, undefined, projects => {
    expect(projects.map(project => project.name)).not.to.contain(name)
  })
})

When(/^the user clicks the project "([^"]*)"$/, function(project) {
  actor.perform(tasks.selectProjectInOverview, project)
})

Then(/^the user should see the headline "([^"]*)"$/, function(project) {
  actor.ask(questions.readHeadline, undefined, headline => {
    expect(headline).to.equal(project)
  })
})
