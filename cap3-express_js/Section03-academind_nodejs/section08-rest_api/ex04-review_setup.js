/*
    npm init -y

    npm install --save express
    npm install --save body-parser
    npm install --save morgan
    npm install --save-dev nodemon

    on package.json:
        "scripts": {
            "start": "nodemon"
        }
    
    and:
        "main": "app/server.js"
*/

/* app.js */
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use((req, res) =>{
    res.send('<h1>Hello There</h1>')
})

module.exports = app


/* server.js */
const http = require('http')
const app = require('./app')

const server = http.createServer(app)
server.listen(8083)


/*
    With these configurations, the server should be running and responding every request with
    the html '<h1>Hello There</h1>'. It should also be configured to parse JSON request bodies,
    and to log each request with morgan.
*/