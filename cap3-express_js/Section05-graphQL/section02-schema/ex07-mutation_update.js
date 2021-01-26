/* 
    And now update user by id
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
        updateUserById(id: Int!, name: String, email: String, password: String): User!
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
        updateUserById: (_, {id, name, email, password}) => {
            const oldUser = users[id - 1]

            const newUser = {
                id: oldUser.id,
                name: name ? name : oldUser.name,
                email: email ? email : oldUser.email,
                password: password ? password : oldUser.password,
            }

            users[id - 1] = newUser

            return newUser
        }
    }
}

module.exports = resolvers

/* 

    The query

    mutation updateUser{
        updateUserById(
            id: 4,
            name: "Régis Darégis", 
            password: "sacacomeusaco"
        ){
            id
            name
            email
            password
        }
    }      


    The results

    {
        "data": {
            "updateUserById": {
                "id": 4,
                "name": "Régis Darégis",
                "email": "saopaulo@gaymail.com",
                "password": "sacacomeusaco"
            }
        }
    }    


*/
