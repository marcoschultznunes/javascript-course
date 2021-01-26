const server = new ApolloServer({ 
    typeDefs: typeDefs, 
    resolvers: resolvers 
});

/*
    The graphQL schema is composed by type definitions and resolvers. Type definitions define 
    our data and our endpoints, resolvers are the functions which fetch the data (controllers).

    We need to define the Query type and Mutation type in order to perform queries and 
    mutations.   
*/

/*
    We'll now prepare our graphQL folder:
        graphql
            typeDefs
            resolvers 
            index => exports the schema object


    We'll add the hello endpoint, which returns the string 'Hello World!'
*/

/* typeDefs.js */
const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type Query {
        hello: String!
    }
`;

module.exports = typeDefs

/* resolvers.js */
const resolvers = {
    Query: {
        hello: () => 'Hello world!', // hello => Endpoint
    },
};

module.exports = resolvers

/* index.js */
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

module.exports = { 
    typeDefs: typeDefs, 
    resolvers: resolvers 
}

/* On app.js */
const graphql =  require('./graphql')

const server = new ApolloServer(graphql);

server.applyMiddleware({ app });

