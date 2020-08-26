import { gql, useMutation, useQuery } from "@apollo/client"

export const useProjects = () =>
  useQuery(gql`
    query {
      projects {
        id
        name
        startDate
        endDate
      }
    }
  `)

export const useAddProject = () =>
  useMutation(
    gql`
      mutation($input: ProjectInput) {
        addProject(input: $input) {
          id
          name
          startDate
          endDate
        }
      }
    `
  )
