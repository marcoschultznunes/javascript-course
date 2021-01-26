const {gql} = require('apollo-server-express')

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        email: String!
        password: String!
    }

    type Query {
        hello: String!
        
        user: User!
        
        fetchUsers: [User]

        getUserById(id: Int!): User!
    }

    type Mutation {

        postUser(name: String!, email: String!, password:String!): User!

        deleteUserById(id: Int!): String!

        updateUserById(id: Int!, name: String, email: String, password: String): User!
    }
`

module.exports = typeDefs
