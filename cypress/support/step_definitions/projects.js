import moment from "moment"

const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps")
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

Given(/^the user is on the project creation form$/, function() {
  cy.visit("/projects/add")
})
When(/^the user creates a new project with name "([^"]*)"$/, function(name) {
  actor.perform(tasks.createProject, { name })
})
Then(/^the project overview should appear$/, function() {
  actor.ask(questions.readHeadline, headline => {
    expect(headline).to.equal("Projects")
  })
})

Then(
  /^the list of projects should contain "([^"]*)" starting today and running for two weeks$/,
  function(name) {
    actor.ask(questions.readProjects, undefined, projects => {
      expect(projects.map(project => project.name)).to.contain(name)
      const project = projects.filter(project => project.name === name).pop()
      expect(project.startDate).to.equal(moment().format("YYYY-MM-DD"))

      expect(project.endDate).to.equal(
        moment()
          .add({ week: 2 })
          .format("YYYY-MM-DD")
      )
    })
  }
)
When(
  /^the user creates a new project with name "([^"]*)" starting next week and running for one week$/,
  function(name) {
    const startDate = moment()
      .add({ week: 1 })
      .startOf("week")
      .format("YYYY-MM-DD")
    const endDate = moment()
      .add({ week: 1 })
      .endOf("week")
      .format("YYYY-MM-DD")
    actor.perform(tasks.createProject, { name, startDate, endDate })
  }
)
Then(
  /^the list of projects should contain "([^"]*)" starting next week and running for one week$/,
  function(name) {
    actor.ask(questions.readProjects, undefined, projects => {
      expect(projects.map(project => project.name)).to.contain(name)
      const project = projects.filter(project => project.name === name).pop()
      expect(project.startDate).to.equal(
        moment()
          .add({ week: 1 })
          .startOf("week")
          .format("YYYY-MM-DD")
      )

      expect(project.endDate).to.equal(
        moment()
          .add({ week: 1 })
          .endOf("week")
          .format("YYYY-MM-DD")
      )
    })
  }
)
