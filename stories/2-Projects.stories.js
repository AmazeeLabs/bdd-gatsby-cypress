import React from "react"
import ProjectsPageLayout from "../src/pages/projects"
import * as metadata from "../src/hooks/metadata"
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
  return <ProjectsPageLayout />
}
