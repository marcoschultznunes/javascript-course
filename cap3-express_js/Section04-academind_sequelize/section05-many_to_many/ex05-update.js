exports.updateProduct = (req, res, next) => {
    const {id} = req.params
    const {categories, description, brandId, price, imageUrl} = req.body // This line changed

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

        // And these 3 lines changed.
        if(categories.length > 0){
            product.setCategories(categories)
        }
        
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
