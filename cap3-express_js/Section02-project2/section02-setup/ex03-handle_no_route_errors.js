/*
    app.js:
*/
const express = require('express')
const app = express()

const productRoutes = require('./model/products/routes')

app.use('/products', productRoutes)

app.use((req, res, next) => {
    /*
        This is a middleware handler that will occur if the route with the requested method is 
        not found  
    */
    const error = new Error('No service found in requested path: ' + req.path + ' and method: ' + req.method)
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    /*
        This middleware will handle all errors in order to make a proper response to send
    */
    res.status(error.status || 500) // If the error has no status, it will be 500
    res.json({
        error: {
            message: error.message 
        }
    })
})

module.exports = app