const moment = require("moment")
const { ApolloServer, gql } = require("apollo-server")
const { projects } = require("../../cypress/fixtures/examples")

const typeDefs = gql`
  type Project {
    id: Int!
    name: String!
    startDate: String!
    endDate: String!
  }

  type Query {
    projects: [Project!]!
  }

  input ProjectInput {
    name: String!
    startDate: String
    endDate: String
  }

  type Mutation {
    addProject(input: ProjectInput): Project!
  }
`

const resolvers = {
  Query: {
    projects: () => projects,
  },

  Mutation: {
    addProject: (_, { input }) => {
      const project = {
        id: projects.length + 1,
        name: input.name,
        startDate: input.startDate
          ? moment(input.startDate).format()
          : moment().format(),
        endDate: input.endDate
          ? moment(input.endDate).format()
          : moment()
              .add(2, "weeks")
              .format(),
      }
      projects.push(project)
      return project
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
