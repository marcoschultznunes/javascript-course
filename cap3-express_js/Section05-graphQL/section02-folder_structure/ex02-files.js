/*
    resolvers
*/

/* hello.js */
const helloResolver = {
    Query: {
        hello: () => 'Hello world!',
    },
};

module.exports = [
    helloResolver
]

/* index.js */
const helloResolvers = require('./hello')

module.exports = [
    ...helloResolvers    
]


/*
    typeDefs
*/

/* hello.js */
const {gql} = require('apollo-server-express')

const helloDef = gql`
type Query {
    hello: String
}
`

module.exports = [
    helloDef
]

/* index.js */
const helloDefs = require('./hello')

module.exports = [
    ...helloDefs
]


/*
    graphql/index.js
*/
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

module.exports = {
    typeDefs,
    resolvers
}


/* On app.js */
const graphql =  require('./graphql')

const server = new ApolloServer(graphql);

server.applyMiddleware({ app });

