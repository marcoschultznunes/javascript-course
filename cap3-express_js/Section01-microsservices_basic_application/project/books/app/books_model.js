const mongoose = require('mongoose')

mongoose.model('books', {
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    numOfPages:{
        type: Number,
        required: false
    },
    publisher:{
        type: String,
        required: false
    }
}, "books")