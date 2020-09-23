/* 
    After setting up the connection and loading the model,
    we can finally create the api's CRUD operations
*/

// POST
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
                /*
                    This is not ideal error handling.
                    But this section is not meant to apply best practices and make a realistic
                    api. Instead, it is meant to present the syntax and to allow better
                    understanding and familiarizing with Node JS, Express, and the other
                    libraries, and also microsservices 
                */

                message: error.message 
            })
        }
    })
})

// GET all books
app.get('/books', (req, res) => {
    BookModel.find().then((results) => {
        res.json(results) // res.json instead of res.send
    }).catch(error => {
        if(error){
            // Same, not ideal
            res.status(400).send({
                message: error.message
            })
        }
    })
})

// GET by ID
app.get('/books/:id', (req, res) => {
    const id = req.params.id // req.params.parameter_name

    BookModel.findById(id).then(book => {
        if(book){ // Check if book exists
            res.json(book) // Again, res.json
        } else{
            res.sendStatus(404)
        }
    }).catch((error) => {
        if(error){
            // Same, not ideal 
            res.status(400).send({
                message: error.message
            })
        }
    })

})

// DELETE
app.delete('/books/:id', (req, res) => {
    const id = req.params.id

    BookModel.findByIdAndDelete(id).then((book) => {
        if(book){ // Check if book existed to send a 404 if it didn't
            res.sendStatus(200)
        } else{
            res.sendStatus(404)
        }
    }).catch((error) => {
        if(error){ 
            res.status(400).send({
                // Same, not ideal 
                message: error.message
            })
        }
    })
})

/*
    UPDATE => Use PATCH instead of PUT, as put means creating a new object and replacing the
    old one. But mongo does not allow that, as the _id is immutable.
        Also {useFindAndModify: false} must be added to the mongoose connection options, as 
    the function findOneAndUpdate used that old function, but by passing that option, 
    it will use a different non deprecated function. 
*/
app.patch('/books/:id', (req, res) => {
    const id = req.params.id

    // P1 => Query object to find one. P2 => the update
    // In mongo, id is _id
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