/* 
    app.js file:
*/
const express = require('express')
const app = express()

// Middleware to test, which will trigger on any request
app.use((req, res, next) => {
    res.status(200).send('Welcome to the App!')
})

module.exports = app


/* 
    server.js file:
*/
const http = require('http')
const app = require('./app')

const port = 8083

const server = http.createServer(app)
server.listen(port)


/* 
    On the package-lock we need to change the "main" atrribute to the server.js file relative
    path
*/


/*
    https://stackoverflow.com/questions/35167824/difference-between-a-server-with-http-createserver-and-a-server-using-express-in/35167883

    Express uses the http module under the hood, app.listen() returns an instance of http. 
    You would use https.createServer if you needed to serve your app using HTTPS, as 
    app.listen only uses the http module.
*/