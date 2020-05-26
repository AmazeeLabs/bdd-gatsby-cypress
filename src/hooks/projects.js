import { gql, useQuery } from "@apollo/client"

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
