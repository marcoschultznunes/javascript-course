/*
    There are 2 functions accessible from the model to create:
        create => creates and saves the object.
        build => does not save, a save method must be called later.
*/

/* On the product_controller.js */
exports.createProduct = (req, res, next) => {
    const {description, brand, price, imageUrl} = req.body

    ProductModel.create({
        description: description,
        brand: brand,
        price: price,
        image: imageUrl
    }).then(() => {
        res.status(201).json({message: 'Product created!'})
    }).catch(() => {
        res.status(500).json({message: 'Could not create product.'})
    })
}

/* On product_routes.js */
router.post('/', product_controller.createProduct)
