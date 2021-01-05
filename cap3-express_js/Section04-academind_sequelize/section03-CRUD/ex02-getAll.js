/* On product_controller.js */
exports.productIndex = (req, res, next) => {
    ProductModel.findAll().then(products => {
        res.status(200).json({
            message: 'Successfully fetched products!',
            products: products
        })
    }).catch(() => {
        res.status(500).json({message: 'Could not fetch products.'})
    })
}

/* On product_routes.js */
router.get('/', product_controller.productIndex)
