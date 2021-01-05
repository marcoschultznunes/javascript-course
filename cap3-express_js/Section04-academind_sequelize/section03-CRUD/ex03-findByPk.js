/* 
    We use a function called findByPk to fetch a product by its ID in sequelize 
*/

/* On product_controller.js */
exports.getById = (req, res, next) => {
    const {id} = req.params

    ProductModel.findByPk(id).then(product => {
        if(!product){
            return res.status(404).json({message: 'No product found with given ID!'})
        }

        res.status(200).json({
            message: 'Product successfully fetched!',
            product: product
        })
    }).catch(() => {
        res.status(500).json({message: 'Could not fetch product.'})
    })
}

/* On product_routes.js */
router.get('/:id', product_controller.getById)
