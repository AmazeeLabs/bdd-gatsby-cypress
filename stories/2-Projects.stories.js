import React from "react"
import ProjectsPageLayout from "../src/pages/projects"
import * as metadata from "../src/hooks/metadata"
import * as projects from "../src/hooks/projects"
import { projects as examples } from "../cypress/fixtures/examples"
import { stub } from "sinon"

export default {
  title: "Projects",
  component: ProjectsPageLayout,
}

const stubMetadata = () => {
  stub(metadata, "useSiteMetadata").returns({
    site: {
      siteMetadata: {
        title: "Project Management",
      },
    },
  })
}

export const Filled = () => {
  stubMetadata()
  stub(projects, "useProjects").returns({
    data: { projects: examples },
  })
  return <ProjectsPageLayout />
}

export const Loading = () => {
  stubMetadata()
  stub(projects, "useProjects").returns({
    loading: true,
    data: null,
  })
  return <ProjectsPageLayout />
}

export const Empty = () => {
  stubMetadata()
  stub(projects, "useProjects").returns({
    data: { projects: [] },
  })
  return <ProjectsPageLayout />
}

export const Error = () => {
  stubMetadata()
  stub(projects, "useProjects").returns({
    error: { message: "Something went wrong ..." },
  })
  return <ProjectsPageLayout />
}
