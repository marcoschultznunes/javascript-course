const express = require('express')
let app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const db = require('./connection')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())


app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});


const product_routes = require('./routes/product_routes')
const user_routes = require('./routes/user_routes')

app.use('/products', product_routes)
app.use('/users', user_routes)


db.sync().then(result => {
    app.use((req, res, next) => {
        res.send('<h1>It just works!</h1>')
    })
}).catch(err => {
    console.log(err)
    app = null
})



module.exports = app
