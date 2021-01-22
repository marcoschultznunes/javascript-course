/*
    We need to install 2 packages:
        npm install --save graphql
        npm install --save apollo-server-express

    watch out for the following warning:
        graphql-subscriptions@1.1.0 requires a peer of graphql@^0.10.5 || ^0.11.3 || ^0.12.0 || 
        ^0.13.0 || ^14.0.0 but none is installed. You must install peer dependencies yourself.

    if this happens, change your graphql version in package.json to one of the specified above,
    and then launch a 'npm i' command.
*/

/*
    I'll use sequelize and postgres for this project. As it states on the sequelize 
    documentation, i need the following packages:
        npm i pg pg-hstore
*/

/* app.js */
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


/* This does not work yet, as we do not have typeDefs, resolvers and context for the 
ApolloServer yet, but on the next section we'll implement it */
const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    // playground: false => Disables playground, useful for production environment. 
    context: {} 
});

server.applyMiddleware({ app });


/* The rest stays the same */
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
