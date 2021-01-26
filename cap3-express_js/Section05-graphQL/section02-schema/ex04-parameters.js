/* 
    We can have parameters similar to REST APIs query params, useful for getting by ID.
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

        getUserById(id: Int!): User!
    }
`

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
        
        getUserById: (_, {id}) => { // the query params object is the 2nd param
            return users[id - 1]
        }
    },
};

module.exports = resolvers

/* 

    The query

    query Hello {
        getUserById(id: 2) {
            id
            name
            email
            password
        }
    }


    The results

    {
        "data": {
            "getUserById": {
                "id": 2,
                "name": "Régis",
                "email": "xalapabrava@gaymail.com",
                "password": "wtfcarai"
            }
        }
    }

*/
