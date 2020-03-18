const { ApolloServer, gql } = require('apollo-server');
const {projects} = require('../../cypress/fixtures/examples');

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
`;

const resolvers = {
  Query: {
    projects: () => projects,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
