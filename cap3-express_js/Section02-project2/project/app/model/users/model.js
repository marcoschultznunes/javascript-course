const mongoose = require('mongoose')

mongoose.model('users', {
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        required: false
    },
    verification_token:{
        type: String,
        required: false
    },
    verification_expiration:{
        type: Date,
        required: false
    }
}, 'users')