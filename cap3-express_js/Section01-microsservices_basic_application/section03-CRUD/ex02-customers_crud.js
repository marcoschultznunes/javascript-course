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