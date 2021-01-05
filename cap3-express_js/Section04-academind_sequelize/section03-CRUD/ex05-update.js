/* On product_controller.js */
exports.updateProduct = (req, res, next) => {
    const {id} = req.params
    const {description, brand, price, imageUrl} = req.body


    ProductModel.findByPk(id).then(product => {
        if(!product){
            const err = new Error('No product found with given ID!')
            err.statusCode = 404
            throw err
        }

        product.description = description || product.description
        product.brand = brand || product.brand
        product.price = price || product.price
        product.imageUrl = imageUrl || product.image

        return product.save()
    })
    .then((newProduct) => {
        res.status(200).json({
            message: 'Product successfully updated!',
            product: newProduct
        })
    })
    .catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not update product.'
        res.status(statusCode).json({message: errMessage})
    })
}

/* On product_routes.js */
router.patch('/:id', product_controller.updateProduct)
