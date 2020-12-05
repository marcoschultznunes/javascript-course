/*
    npm install --save cors
*/

/* app.js */
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors()) // cors

// csp
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});

app.use((req, res) =>{
    res.send('<h1>Hello There</h1>')
})

module.exports = app

/*
    Now the app should be enabling CORS and having Content-Security-Policy.
*/
