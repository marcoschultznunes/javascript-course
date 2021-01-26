/* 
    We'll now delete user by id
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

    type Mutation {
        deleteUserById(id: Int!): String!
    }
`

/* resolvers.js */
const users = [
    {id: 1, name: 'Fofanis', email: 'salarioo@gmail.com', password: 'owmoneyyeah'},
    {id: 2, name: 'Régis', email: 'xalapabrava@gaymail.com', password: 'wtfcarai'},
    {id: 3, name: 'Morris', email: 'doors@doormail.com', password: 'ruiders on di strom'},
    {id: 4, name: 'Dagoberto', email: 'saopaulo@gaymail.com', password: 'imbambi'},
    {id: 5, name: 'Jimenez', email: 'mexicanu@meximail.com', password: 'arribamuchachos'}
]

const resolvers = {
    Mutation: {
        deleteUserById: (_, {id}) => {
            users[id-1] = null

            return 'Successfully deleted user!'
        }
    }
}

module.exports = resolvers

/* 

    The query

    mutation deleteUser{
        deleteUserById(id: 4)
    }    


    The results

    {
        "data": {
            "deleteUserById": "Successfully deleted user!"
        }
    }
    

    And then when fetching, the element will now be null in the array

*/
