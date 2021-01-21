const express = require('express')
let app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const {sequelize} = require('./models')
const {ApolloServer, gql} = require('apollo-server-express')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

// app.use((req, res, next) => {
//     res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
//     return next();
// });

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


sequelize.sync().then(result => {
    console.log('Connected to database!')

    app.use((req, res) => {
        res.send('ITS ALIVE')
    })

    app.use((error, req, res, next) => {
        console.log(error.message)

        const status = error.statusCode || 500
        const message = error.message || 'An error has ocurred.'
    
        const finalError = {
            message: message
        }
        if(error.errors){
            finalError.errors = error.errors
        }

        return res.status(status).json(finalError)
    })
}).catch(err => {
    console.log(err)
    app = null
})

module.exports = app
