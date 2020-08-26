const { createQuestion } = require("cypress-screenplay")

const readHeadline = createQuestion((cy, param, answer) => {
  cy.get("h2").should($item => answer($item.text()))
})

const readProjects = createQuestion((cy, param, answer) => {
  cy.get("ul.projects li").should($items =>
    answer(
      $items.toArray().map(item => ({
        name: item.getElementsByTagName("a")[0].textContent,
        startDate: item.getElementsByClassName("startDate")[0].textContent,
        endDate: item.getElementsByClassName("endDate")[0].textContent,
      }))
    )
  )
})

export { readHeadline, readProjects }
