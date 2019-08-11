const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma')
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation')
const Measurement = require('./resolvers/Measurement')

const resolvers = {
  Query,
  Mutation,
  Measurement
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

server.start(() => console.log(`Server is running on http://localhost:4000`))

