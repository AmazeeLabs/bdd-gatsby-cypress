import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import moment from "moment"
import { useProjects } from "../external/projects"

const ProjectsPage = () => {
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

  if (!data.projects || !data.projects.length) {
    return (
      <p>
        <em>No active projects.</em>
      </p>
    )
  }

  return (
    <ul className="projects">
      {data.projects
        .filter(project => moment(project.endDate).diff(moment()) > 0)
        .map(project => (
          <li key={project.id}>
            <Link to={`/project/${project.id}`}>{project.name}</Link>
            <span className="startDate">
              {moment(project.startDate).format("YYYY-MM-DD")}
            </span>{" "}
            -{" "}
            <span className="endDate">
              {moment(project.endDate).format("YYYY-MM-DD")}
            </span>
            )
          </li>
        ))}
    </ul>
  )
}

const ProjectsPageLayout = () => (
  <Layout>
    <SEO title="Projects" />
    <h2>Projects</h2>
    <ProjectsPage />
  </Layout>
)

export default ProjectsPageLayout
