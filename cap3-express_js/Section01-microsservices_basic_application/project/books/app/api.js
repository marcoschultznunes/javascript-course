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

mongoose.connect(connectionKey, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
}, () => {
    console.log('Connected to the Books database.')
})

/* The API */

app.get('/', (req, res) => {
    res.send('Welcome to the books service!')
})

app.get('/books', (req, res) => {
    BookModel.find().then((results) => {
        res.json(results)
    }).catch(error => {
        if(error){
            res.status(400).send({
                message: error.message
            })
        }
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id

    BookModel.findById(id).then(book => {
        if(book){
            res.json(book)
        } else{
            res.sendStatus(404)
        }
    }).catch((error) => {
        if(error){ 
            res.status(400).send({
                message: error.message
            })
        }
    })

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
        res.sendStatus(200)
    }).catch((error) => {
        if(error){ 
            res.status(400).send({
                message: error.message
            })
        }
    })
})

app.delete('/books/:id', (req, res) => {
    const id = req.params.id

    BookModel.findByIdAndDelete(id).then((book) => {
        if(book){
            res.sendStatus(200)
        } else{
            res.sendStatus(404)
        }
    })
})

app.patch('/books/:id', (req, res) => {
    const id = req.params.id

    BookModel.findOneAndUpdate({_id: id}, req.body).then(success => {
        if(success){
            res.sendStatus(200)
        } else{
            res.sendStatus(404)
        }
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
