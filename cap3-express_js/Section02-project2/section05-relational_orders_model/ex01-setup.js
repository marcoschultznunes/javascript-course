// The model.js file
const mongoose = require('mongoose')

mongoose.model('orders', {
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        min: [1, 'The quantity of the product must not be below 1.'] 
        /* 
            min does not work with patches
            By default mongoose does not validate on an update call
        */
    }
}, 'orders')

// The routes.js file
const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
require('./model')
const OrderModel = mongoose.model('orders')

module.exports = router

// Using the router in app.js
const orderRoutes = require('./model/orders/routes')
app.use('/orders', orderRoutes)
