const { createTask } = require('cypress-screenplay');

const visitProjectsOverview = createTask(cy => {
  cy.visit('/projects');
});

const selectProjectInOverview = createTask((cy, project) => {
  cy.findByText(project).click();
});

module.exports = {visitProjectsOverview, selectProjectInOverview};
