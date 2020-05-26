import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Router } from "@reach/router"
import { useProjects } from "../hooks/projects"

const ProjectDetailPage = ({ id }) => {
  const { data, loading, error } = useProjects()

  if (loading) {
    return (
      <p>
        <em>Loading...</em>
      </p>
    )
  }
  if (error) {
    return (
      <p>
        <em>{error.message}</em>
      </p>
    )
  }

  const project = data.projects
    .filter(project => project.id === parseInt(id))
    .shift()

  if (!project) {
    return (
      <p>
        <em>Project not found</em>
      </p>
    )
  }

  return (
    <>
      <SEO title={project.name} />
      <h2>{project.name}</h2>
    </>
  )
}

const ProjectDetailPageLayout = () => (
  <Layout>
    <Router>
      <ProjectDetailPage path="project/:id" />
    </Router>
  </Layout>
)

export default ProjectDetailPageLayout
