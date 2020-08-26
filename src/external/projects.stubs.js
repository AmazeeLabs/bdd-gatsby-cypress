import { stub } from "sinon"
import * as projects from "./projects"
import { projects as examples } from "../../cypress/fixtures/examples"

export const stubProjects = () => {
  stub(projects, "useProjects").returns({
    data: { projects: examples },
  })
}

export const stubProjectsLoading = () => {
  stub(projects, "useProjects").returns({
    loading: true,
    data: null,
  })
}

export const stubProjectsEmpty = () => {
  stub(projects, "useProjects").returns({
    data: { projects: [] },
  })
}

export const stubProjectsError = () => {
  stub(projects, "useProjects").returns({
    error: { message: "Something went wrong ..." },
  })
}

export const stubAddProject = () => {
  const addProject = stub()
  addProject.reset()
  addProject.returns({ data: { addProject: true } })
  stub(projects, "useAddProject").returns([addProject, {}])
  return addProject
}

export const stubAddProjectError = () => {
  const addProject = stub()
  addProject.reset()
  addProject.returns({ data: null, error: { message: "Boom!" } })
  stub(projects, "useAddProject").returns([
    addProject,
    { loading: false, error: { message: "Boom!" } },
  ])
  return addProject
}
