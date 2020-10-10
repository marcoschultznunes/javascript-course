const express = require('express')
const app = express()
const morgan  = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const secrets = require('./secrets/secrets')
mongoose.connect(`mongodb+srv://marcola:${secrets.password}@cluster0.p4xhv.mongodb.net/${secrets.db}?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
}, () => {
    console.log('Connected to database.')
})

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

app.use(function(req, res, next) {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});

const productRoutes = require('./model/products/routes')
const orderRoutes = require('./model/orders/routes')
const userRoutes = require('./model/users/routes')

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)
app.use('/users', userRoutes)

app.use((req, res, next) => {
    const error = new Error('No service found in requested path: ' + req.path + ' and method: ' + req.method)
    error.status = 404
    next(error)
})
 
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message 
        }
    })
})

module.exports = app