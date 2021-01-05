/* 
    In this example, we'll demonstrate a where query by adding a route to fetch all products of
    a given brand.
*/

/* On product_controller.js */
exports.getProductsByBrand = (req, res, next) => {
    const {brand} = req.params

    ProductModel.findAll({where: {brand: brand}}).then(products => {
        res.status(200).json({
            message: 'Successfully fetched products of the given brand!',
            products: products
        })
    }).catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not fetch products.'
        res.status(statusCode).json({message: errMessage})
    })
}

/* On product_routes.js */
router.get('/brands/:brand', product_controller.getProductsByBrand)
