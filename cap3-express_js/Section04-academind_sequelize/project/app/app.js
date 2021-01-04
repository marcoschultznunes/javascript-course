const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())


app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});

app.use((req, res, next) => {
    res.send('<h1>It just works!</h1>')
})

module.exports = app