const { createTask } = require("cypress-screenplay")

const visitProjectsOverview = createTask(cy => {
  cy.visit("/projects")
})

const selectProjectInOverview = createTask((cy, project) => {
  cy.findByText(project).click()
})

const createProject = createTask((cy, project) => {
  project.name && cy.findByLabelText("Project name").type(project.name)
  project.startDate && cy.findByLabelText("Start date").type(project.startDate)
  project.endDate && cy.findByLabelText("End date").type(project.endDate)
  cy.findByText("Create").click()
})

module.exports = {
  visitProjectsOverview,
  selectProjectInOverview,
  createProject,
}
