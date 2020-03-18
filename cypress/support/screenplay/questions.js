const {createQuestion} = require('cypress-screenplay');

const readHeadline = createQuestion((cy, param, answer) => {
  cy.get('h2').should($item => answer($item.text()));
});

const readProjects = createQuestion((cy, param, answer) => {
  cy.get('ul.projects li')
    .should( $items =>
      answer($items.toArray().map(item => item.textContent))
    );
});

export {readHeadline, readProjects};
