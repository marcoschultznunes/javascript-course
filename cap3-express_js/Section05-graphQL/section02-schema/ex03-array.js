/*
    We'll now simulate a fetch by returning an array of users.
*/

/* typeDefs.js */
const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
    }

    type Query {
        fetchUsers: [User]!
    }
`;

module.exports = typeDefs

/* resolvers.js */
const users = [
    {id: 1, name: 'Fofanis', email: 'salarioo@gmail.com', password: 'owmoneyyeah'},
    {id: 2, name: 'Régis', email: 'xalapabrava@gaymail.com', password: 'wtfcarai'},
    {id: 3, name: 'Morris', email: 'doors@doormail.com', password: 'ruiders on di strom'},
    {id: 4, name: 'Dagoberto', email: 'saopaulo@gaymail.com', password: 'imbambi'},
    {id: 5, name: 'Jimenez', email: 'mexicanu@meximail.com', password: 'arribamuchachos'}
]

const resolvers = {
    Query: {
        fetchUsers: () => users
    },
};

module.exports = resolvers

/* 

    The query

    query Hello {
        fetchUsers {
            id
            name
        }
    }


    The results

    {
        "data": {
            "fetchUsers": [
                {
                    "id": 1,
                    "name": "Fofanis"
                },
                {
                    "id": 2,
                    "name": "Régis"
                },
                {
                    "id": 3,
                    "name": "Morris"
                },
                {
                    "id": 4,
                    "name": "Dagoberto"
                },
                {
                    "id": 5,
                    "name": "Jimenez"
                }
            ]
        }
    }
*/
