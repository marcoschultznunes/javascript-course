const mongoose = require('mongoose')

mongoose.model('orders', {
    customerID: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    bookID:{
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    initialDate:{
        type: Date,
        required: true
    },
    deliveryDate:{
        type: Date,
        required: true
    }    
    
}, 'orders')

// Requiring the model
require('./orders_model')
const OrdersModel = mongoose.model('orders')