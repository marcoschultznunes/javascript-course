const mongoose = require('mongoose')

mongoose.model('products', {
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    inStock: {
        type: Number,
        required: true
    }
}, 'products')