import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import { resolvers } from './resolvers'

/**
 * 🚀 Run `yarn start` to start the GraphQL server. 
 * 
 * 💡 To explore all available features, fork the CodeSandbox and connect it to your own demo database.
 * Follow the instructions here: https://github.com/prisma-csb/graphql-example-ts/blob/master/SETUP.md
 */

 const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
} as any)

server.start(() => console.log('Server is running on http://localhost:4000'))
