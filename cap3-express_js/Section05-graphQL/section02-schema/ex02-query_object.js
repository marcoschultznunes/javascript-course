/*
    We'll now make an user endpoint which will fetch a mock user with id, name, email & password
    attributes
*/

/* typeDefs.js */
const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
    }

    type Query {
        hello: String!
        user: User
    }
`;

module.exports = typeDefs

/* resolvers.js */
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        user: () => {
            return { id: 4, name: 'Régis', email: 'xalapabrava@gaymail.com', password: 'wtfcarai' }
        }
    },
};

module.exports = resolvers


/*
    The query

    query Hello {
        user {
            name
            email
        }
    }


    The result

    {
        "data": {
            "user": {
                "name": "Régis",
                "email": "xalapabrava@gaymail.com"
            }
        }
    }
*/

