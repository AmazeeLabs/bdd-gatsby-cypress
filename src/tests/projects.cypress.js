import React from "react"
import { mount } from "cypress-react-unit-test"
import AddProjectPage from "../pages/projects/add"
import sinon from "sinon"
import actor from "../../cypress/support/screenplay/actor"
import * as tasks from "../../cypress/support/screenplay/tasks"
import { stubMetadata } from "../external/metadata.stubs"
import { stubAddProject, stubAddProjectError } from "../external/projects.stubs"

describe("addProject", () => {
  beforeEach(() => {
    sinon.restore()
  })

  it("creates a new project with only a name", () => {
    stubMetadata()
    const addProject = stubAddProject()
    mount(<AddProjectPage />)
    actor.perform(tasks.createProject, { name: "My new project" })
    cy.should(() => {
      sinon.assert.calledWithExactly(addProject, {
        variables: { input: { name: "My new project" } },
      })
    })
  })

  it("creates with start and end date", () => {
    stubMetadata()
    const addProject = stubAddProject()
    mount(<AddProjectPage />)
    actor.perform(tasks.createProject, {
      name: "My new project",
      startDate: "2020-07-01",
      endDate: "2020-07-31",
    })
    cy.then(() => {
      sinon.assert.calledWithExactly(addProject, {
        variables: {
          input: {
            name: "My new project",
            startDate: "2020-07-01",
            endDate: "2020-07-31",
          },
        },
      })
    })
  })

  it("rejects if project name is missing", () => {
    stubMetadata()
    const addProject = stubAddProject()
    mount(<AddProjectPage />)
    actor.perform(tasks.createProject, {
      startDate: "2020-07-01",
      endDate: "2020-07-31",
    })
    cy.then(() => {
      sinon.assert.notCalled(addProject)
    })
  })

  it("navigates to project overview after successful creation", () => {
    stubMetadata()
    stubAddProject()
    mount(<AddProjectPage />)
    const navigate = sinon.spy(global, "___navigate")
    actor.perform(tasks.createProject, {
      name: "Test",
    })
    cy.then(() => {
      sinon.assert.calledWith(navigate, "/projects")
    })
  })

  it("does not navigate on error", () => {
    stubMetadata()
    stubAddProjectError()
    mount(<AddProjectPage />)
    const navigate = sinon.spy(global, "___navigate")
    actor.perform(tasks.createProject, {
      name: "Test",
    })
    cy.then(() => {
      sinon.assert.notCalled(navigate)
    })
  })
})
