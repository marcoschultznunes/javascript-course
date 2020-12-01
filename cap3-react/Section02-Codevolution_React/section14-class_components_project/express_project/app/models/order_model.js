const mongoose = require('mongoose')

mongoose.model('orders', {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        min: [1, 'The quantity of the product must not be below 1.']
    },
    dateCreated: {
        type: Date,
        required: true
    }
}, 'orders')