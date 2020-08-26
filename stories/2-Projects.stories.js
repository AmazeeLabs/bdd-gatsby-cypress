import React from "react"
import ProjectsPageLayout from "../src/pages/projects"
import { stubMetadata } from "../src/external/metadata.stubs"
import {
  stubProjects,
  stubProjectsEmpty,
  stubProjectsError,
  stubProjectsLoading,
} from "../src/external/projects.stubs"

export default {
  title: "Projects",
  component: ProjectsPageLayout,
}

export const Filled = () => {
  stubMetadata()
  stubProjects()
  return <ProjectsPageLayout />
}

export const Loading = () => {
  stubMetadata()
  stubProjectsLoading()
  return <ProjectsPageLayout />
}

export const Empty = () => {
  stubMetadata()
  stubProjectsEmpty()
  return <ProjectsPageLayout />
}

export const Error = () => {
  stubMetadata()
  stubProjectsError()
  return <ProjectsPageLayout />
}
