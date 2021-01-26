/*
    We'll now simulate a post request, creating a user and then returning it. The user
    is added to the mock users array.
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
        postUser(name: String!, email: String!, password:String!): User!
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
    Mutation: {
        postUser: (_, {name, email, password}) => {
            const user = {id: users.length, name, email, password}

            users.push(user)

            return user
        } 
    },
}

module.exports = resolvers


/* 

    The query

    query Hello {
        postUser(
            name: "Xongas Pongas",
            email: "xonguinha@gaymail.com",
            password: "dexadesesafada"
        ){
            id
            name
            email
        }
    }    


    The results

    {
        "data": {
            "postUser": {
                "id": 7,
                "name": "Xongas Pongas",
                "email": "xonguinha@gaymail.com"
            }
        }
    }    
*/
