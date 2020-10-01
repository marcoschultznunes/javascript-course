const express = require('express')
const app = express()
const morgan  = require('morgan')
const cors = require('cors')

app.use(morgan('dev'))

app.use(cors())

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