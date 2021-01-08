exports.categoryIndex = (req, res, next) => {
    CategoryModel.findAll({include: [
        {
            model: ProductModel,
            as: 'products',
            include: 'brand',
            through: {attributes: []}, // This line will exclude a weird category_product field
            attributes: {exclude:['brandId']}
        }
    ]})
    .then(categories => {
        res.status(200).json({
            message: 'Successfully fetched categories!',
            categories: categories
        })

    }).catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not fetch categories.'
        res.status(statusCode).json({message: errMessage})
    })
}

/* On product_controller.js */
exports.productIndex = (req, res, next) => {
    ProductModel.findAll({include: [BrandModel, 
        {
            model: CategoryModel,
            as: 'categories',
            through: {attributes: []}
        }
    ], attributes: {exclude:['brandId']} })
    .then(products => {
        res.status(200).json({
            message: 'Successfully fetched products!',
            products: products
        })

    }).catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not fetch products.'
        res.status(statusCode).json({message: errMessage})
    })
}
exports.getById = (req, res, next) => {
    const {id} = req.params

    ProductModel.findByPk(id, {include: [BrandModel, 
        {
            model: CategoryModel,
            as: 'categories',
            through: {attributes: []}
        }
    ], attributes: {exclude:['brandId']} })
    .then(product => {
        if(!product){
            const err = new Error('No product found with given ID!')
            err.statusCode = 404
            throw err
        }

        res.status(200).json({
            message: 'Product successfully fetched!',
            product: product
        })

    }).catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not fetch product.'
        res.status(statusCode).json({message: errMessage})
    })
}

/* https://stackoverflow.com/questions/45070595/sequelize-exclude-belongs-to-many-mapping-object */

/* The better way to do this would be to make the entire sequelize project the other way, the
OOP way. */
