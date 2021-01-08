/* 
    We'll change the createProduct function to add the categories according to 
    req.body.categories
*/
exports.createProduct = (req, res, next) => {
    const {categories, description, brandId, price, imageUrl} = req.body

    BrandModel.findByPk(brandId)
        .then(brand => {
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
    .then(createdProduct => { 
        /* 
            Product has already been created, but here we add the categories.
            We could add a catch here to return an error if the categories are not added properly.
        */
        if(categories.length > 0){
            // This function is provided automatically by sequelize
            createdProduct.setCategories(categories) 
        }

        return createdProduct.save()
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
