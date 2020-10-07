router.patch('/:id', (req, res, next) => {
    const id = req.params.id

    ProductModel.findById(req.body.product).then(product => { // Check if product exists
        if(product || req.body.product === undefined){ 
            /* req.body.product === undefined means that the product won't be changed, so 
            there shouldn't be errors */

            if(req.body.quantity < 1){ /* This is a hack to make the quantity not be 0 or */
                req.body.quantity = 1  /* negative. As mongoose doesn't validate updates */
            }

            OrderModel.findByIdAndUpdate({_id: id}, req.body).then((order) => {
                if(order){
                    res.status(200).send({
                        message: 'Order successfully updated!', 
                        orderRequest: {
                            method: 'GET',
                            url: 'http://localhost:8083/orders/' + order._id
                        }
                    })
                } else{
                    res.status(404).send({message: 'Order not found.'})
                }
            }).catch(error => {
                res.status(400).send({error: {message: error.message}})
            })
 
        } else{
            res.status(404).send({message: 'Product not found.'})
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})