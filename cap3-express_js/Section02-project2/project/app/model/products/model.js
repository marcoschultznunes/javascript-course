const mongoose = require('mongoose')

mongoose.model('products', {
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: false
    },
    price:{
        type: Number,
        required: true
    }
}, 'products')