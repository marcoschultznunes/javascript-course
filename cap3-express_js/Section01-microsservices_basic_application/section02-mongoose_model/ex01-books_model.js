const mongoose = require('mongoose')

mongoose.model('books', { //P1 => Model name. P2 => Object describing the model
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
}, "books") // This last param specifies the name the collection will have

// To use the model, we must require it
require('./books_model')

// We can then use this model by assigning it to a variable
const books_model = mongoose.model('books') // P1 => Model's name

/*
    This variable will have functions that can be used for CRUD operations 
    (Create, Read, Update, Delete)
*/