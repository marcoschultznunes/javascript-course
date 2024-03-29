const mongoose = require('mongoose')

mongoose.model('customers', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, 'customers')

// Requiring the model
require('./customers_model')
const CustomersModel = mongoose.model('customers')