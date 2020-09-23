/* 
    After setting up the connection and loading the model,
    we can finally create the api's CRUD operations
*/

//POST
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
        res.send() // Return an empty response with the OK code.
    }).catch((error) => {
        if(error){ 
            res.status(400).send({ 
                /*
                    This is not ideal as every error will be a bad request. 
                */

                message: error.message 
            })
        }
    })
})