/*
    On the routes.js file:
*/

// Index:
router.get('/', (req, res, next) => {
    ProductModel.find().then(products => {
        res.json(products)
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})

// Get one:
router.get('/:id', (req, res, next) => {
    const id = req.params.id

    ProductModel.findById(id).then(product => {
        if(product){
            res.json(product)
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})