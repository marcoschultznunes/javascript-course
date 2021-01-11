const ProductModel = require('../models/product_model')
const CategoryModel = require('../models/category_model')
const { validationResult } = require('express-validator')

// INDEX
exports.getProducts = (req, res, next) => {
    ProductModel.findAll({include: [
        {
            model: CategoryModel,
            as: 'categories',
            through: {attributes: []},
        },
            'brand'
        ], attributes: {exclude: ['brandId']}
    })
    .then(products => {
        res.status(200).json({
            message: 'Successfully fetched products!',
            products: products
        })
    })
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    })
}

// POST
exports.postProduct = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Query is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()
        throw err
    }
    
    const {categories, name, description, price, imageUrl, brandId} = req.body

    console.log('Brand: ' + brandId)

    ProductModel.create({
        name: name, 
        description: description, 
        price: price,
        imageUrl: imageUrl,
        brandId: brandId
    })
    .then(createdProduct => { 
        if(categories.length > 0){
            createdProduct.setCategories(categories) 
        }

        return createdProduct.save()
    })
    .then(newProduct => {
        res.status(201).json({
            message: 'Product created!',
            product: newProduct
        })
    })
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    })
}

// DELETE
exports.deleteProduct = (req, res, next) => {
    const {id} = req.params

    ProductModel.findByPk(id).then(product => {
        if(!product){
            const err = new Error('No product found with given ID!')
            err.statusCode = 404
            throw err
        }

        return product.destroy()
    })
    .then(() => {
        res.status(200).json({message: 'Product deleted!'})
    })
    .catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not delete product.'
        res.status(statusCode).json({message: errMessage})
    })
}
