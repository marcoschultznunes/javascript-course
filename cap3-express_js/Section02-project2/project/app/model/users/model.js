const mongoose = require('mongoose')

mongoose.model('users', {
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, 'users')