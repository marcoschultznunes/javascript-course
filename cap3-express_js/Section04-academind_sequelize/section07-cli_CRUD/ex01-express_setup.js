/*
    We'll now do the usual express setup, adding express, body parser, morgan, cors, the 
    server.js, and the app.js file. 
*/

/* server.js */
const http = require('http')
const app = require('./app')

const server = http.createServer(app)
server.listen(8083)

/* app.js */
const express = require('express')
let app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const {sequelize} = require('./models') // sequelize is exported from models/index.js

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});

sequelize.sync().then(result => { // sequelize.sync()
    app.use((req, res, next) => {
        res.send('<h1>It just works!</h1>')
    })
}).catch(err => {
    console.log(err)
    app = null
})

module.exports = app
