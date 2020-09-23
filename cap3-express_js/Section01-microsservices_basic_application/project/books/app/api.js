/* Express */
const express = require('express')
const app = express()

/* ORM With Mongoose */
const mongoose = require('mongoose')
require('./books_model')
const BookModel = mongoose.model('books')

/* Parse JSON With Body-Parser */
const bodyParser = require('body-parser') // Built-in
app.use(bodyParser.json())

/* Connect to MongoDB */
const secrets = require('./secrets')

// Get the connection key by clicking on connect on atlas and copying the key.
// The password and the db name must be replaced
// DO NOT COMMIT THE PASSWORD TO GITHUB
const connectionKey = "mongodb+srv://marcola:" + secrets.pw + "@cluster0.p4xhv.mongodb.net/" + secrets.db + "?retryWrites=true&w=majority"

mongoose.connect(connectionKey, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to the Books database.')
})

/* The API */

app.get('/', (req, res) => {
    res.send('Welcome to the books service')
})

app.post('/books', (req, res) => {
    
    const bookObject = {
        title: req.body.title,
        author: req.body.author,
        numOfPages: req.body.numOfPages,
        publisher: req.body.publisher
    }

    let book = new BookModel(bookObject)
    
    book.save().then(() => {
        console.log('New Book Created!')
        res.send()
    }).catch((error) => {
        if(error){ 
            res.status(400).send({
                message: error.message
            })
        }
    })
})

app.listen(8083, () => {
    console.log('Listening on the port 8083.')
})
