/* On product_controller.js */
exports.createProduct = (req, res, next) => {
    const {description, brandId, price, imageUrl} = req.body

    BrandModel.findByPk(brandId)
        .then(brand => {
            // First we check if the given brand Id exists
            if(!brand){
                const err = new Error('No brand found with given ID!')
                err.statusCode = 404
                throw err
            }

            return ProductModel.create({
                description: description,
                brandId: brandId,
                price: price,
                image: imageUrl
            })
        })
    .then((createdProduct) => {
        res.status(201).json({message: 'Product created!', product: createdProduct})
    })
    .catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not create product.'
        res.status(statusCode).json({message: errMessage})
    })
}

/* 
    The update is a bit more tricky, but the idea is to pass use BrandModel.findOne, and define
    the filter according to whether the user passed a new brandId or not. If the user did not,
    the filter will be empty, allowing the request to go through, then later the previous 
    brandId will be saved instead of the null value. 
*/
exports.updateProduct = (req, res, next) => {
    const {id} = req.params
    const {description, brandId, price, imageUrl} = req.body
    
    const brandFilter = {}

    if(brandId){
        brandFilter.id = brandId
    }

    BrandModel.findOne(brandFilter)
    .then(brand => {
        if(!brand){
            const err = new Error('No brand found with given ID!')
            err.statusCode = 404
            throw err
        }

        return ProductModel.findByPk(id)
    })
    .then(product => {
        if(!product){
            const err = new Error('No product found with given ID!')
            err.statusCode = 404
            throw err
        }

        product.description = description || product.description
        product.brandId = brandId || product.brandId
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
