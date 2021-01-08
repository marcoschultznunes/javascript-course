/*
    Now, we'll also make brands return their posts
*/

/* On brand_controller.js */
exports.brandIndex = (req, res, next) => {
    BrandModel.findAll({include: ProductModel}) // Only change
        .then((brands) => {
            res.status(200).json({message: 'Successfully fetched brands!', brands: brands})
        })
        .catch(err => {
            const statusCode = err.statusCode || 500
            const errMessage = err.message || 'Could not fetch brands.'
            res.status(statusCode).json({message: errMessage})
        })
}

exports.getBrandById = (req, res, next) => {
    const {id} = req.params

    BrandModel.findByPk(id, {include: ProductModel})
    .then(brand => {
        res.status(200).json({message: 'Successfully fetched brand!', brand: brand})
    })
    .catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not fetch brand.'
        res.status(statusCode).json({message: errMessage})
    })
}
