/* 
    The '__v' field is an internal Mongo field that doesn't have any reason to be passed in the
    response. We can exclude it to avoid polluting our response.

    To exclude, we use the function .select('-nameOfTheField'), the minus sign means it'll be 
    excluded.
    
*/

router.get('/', (req, res, next) => {
    ProductModel.find()
    .select('-__v') // Excludes the internal field __v from the response
    .then(products => {
        res.json(products)
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id

    ProductModel.findById(id)
    .select('-__v') // Excludes the internal field __v from the response
    .then(product => {
        if(product){
            res.json(product)
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})