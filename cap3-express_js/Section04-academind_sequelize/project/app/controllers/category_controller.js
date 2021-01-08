const CategoryModel = require('../models/category_model')
const ProductModel = require('../models/product_model')

exports.categoryIndex = (req, res, next) => {
    CategoryModel.findAll({include: [
        {
            model: ProductModel,
            as: 'products',
            include: 'brand',
            through: {attributes: []},
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
exports.createCategory = (req, res, next) => {
    const {name} = req.body

    CategoryModel.create({name: name})
        .then((createdCategory) => {
            res.status(201).json({message: 'Category created!', category: createdCategory})
        })
        .catch(err => {
            const statusCode = err.statusCode || 500
            const errMessage = err.message || 'Could not create category.'
            res.status(statusCode).json({message: errMessage})
        })
}
exports.deleteCategory = (req, res, next) => {
    const {id} = req.params

    CategoryModel.findByPk(id).then(cat => {
        if(!cat){
            const err = new Error('No category found with given ID!')
            err.statusCode = 404
            throw err
        }

        return cat.destroy()
    })
    .then(() => {
        res.status(200).json({message: 'Category deleted!'})
    })
    .catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not delete category.'
        res.status(statusCode).json({message: errMessage})
    })
}
