/*
    To test our setup, we'll add the typeDefs and the resolvers from the documentation to the
    graphQL server.
*/

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

/*
    And now if i open up on my browser 
        http://localhost:8083/graphql

    i will open graphql's playground, which works sort of like insomnia and postman.

    But, in order for playground to work, i'll need to disable CSP. So it is a good idea to
    disable CSP DURING DEVELOPMENT for playground
*/

/*
    And now for testing with playground:
        
        => The query:

        query HelloWorld {
            hello
        }

        => The response:

        {
            "data": {
                "hello": "Hello world!"
            }
        }
*/
