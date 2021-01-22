const {gql} = require('apollo-server-express')

const helloDef = gql`
type Query {
    hello: String
}
`

module.exports = [
    helloDef
]
