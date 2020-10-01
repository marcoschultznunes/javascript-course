//https://www.npmjs.com/package/cors

/*
    app.js:
*/
const express = require('express')
const app = express()
const morgan  = require('morgan') // We've added morgan now
const cors = require('cors') // CORS NPM library to handle cors

app.use(morgan('dev')) // Configuring morgan

app.use(cors()) // Makes all CORS allowed by default

const productRoutes = require('./model/products/routes')

app.use('/products', productRoutes)

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