// Get one

/*
    I made it get the order and the product, then generate the product URL
*/
router.get('/:id', (req, res, next) => {
    const id = req.params.id

    OrderModel.findById({_id: id})
    .select('-__v')
    .then(order => {
        if(order){
            ProductModel.findById(order.product)
            .select('-__v')
            .then(product => {
                if(product){
                    const responseObject = {
                        _id: order._id,
                        product: {
                            _id: product._id,
                            name: product.name,
                            brand: product.brand,
                            price: product.price,
                            request: {
                                method: 'GET',
                                url: 'http://localhost:8083/products/' + product._id
                            }
                        },
                        quantity: order.quantity
                    }
                    
                    res.json(responseObject)
                } else {
                    res.status(404).send({error: {message: "The order's product was not found."}})
                }
            }).catch(error => {
                res.status(400).send({error: {message: error.message}})
            })   
        } else{
            res.status(404).send({error: {message: 'Order not found.'}})
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})

// Delete
router.delete('/:id', (req, res, next) => {
    const id = req.params.id

    OrderModel.findByIdAndDelete({_id: id}).then(order => {
        if(order){
            res.status(200).send({message: 'Order successfully deleted!'})
        } else{
            res.status(404).send({error: {message: 'Order not found.'}})
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})