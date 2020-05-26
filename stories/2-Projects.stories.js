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

export const Filled = () => {
  stub(metadata, "useSiteMetadata").returns({
    site: {
      siteMetadata: {
        title: "Project Management",
      },
    },
  })
  stub(projects, "useProjects").returns({
    data: { projects: examples },
  })
  return <ProjectsPageLayout />
}
