/*
    We can fetch an association by passing {include: Model} as an option to a find function.

    We should also exclude the brandId field, by passing the following option:
        attributes: {exclude:['brandId']}
    
    Now there will only be a brand field.
*/

/* On product_controller.js */
ProductModel.findAll({include: BrandModel, attributes: {exclude:['brandId']} })
.then(products => {
    res.status(200).json({
        message: 'Successfully fetched products!',
        products: products
    })
})

exports.getById = (req, res, next) => {
    const {id} = req.params

    // include: BrandModel.
    ProductModel.findByPk(id, {include: BrandModel, attributes: {exclude:['brandId']} })
    .then(product => {
        res.status(200).json({
            message: 'Product successfully fetched!',
            product: product
        })
    })
}
