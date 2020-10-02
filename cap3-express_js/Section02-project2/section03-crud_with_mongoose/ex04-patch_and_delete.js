/*
    On the routes.js file:
*/

// Patch
router.patch('/:id', (req, res, next) => {
    const id = req.params.id
    
    ProductModel.findOneAndUpdate({_id: id}, req.body).then(product => {
        if(product){
            res.sendStatus(200)
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})

// Delete
router.delete('/:id', (req, res, next) => {
    const id = req.params.id

    ProductModel.findOneAndDelete({_id: id}).then(product => {
        if(product){
            res.sendStatus(200)
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})