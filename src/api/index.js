const { ApolloServer, gql } = require('apollo-server');

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

const resolvers = {};

const server = new ApolloServer({ typeDefs, resolvers, mocks: true });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
