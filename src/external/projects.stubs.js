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
