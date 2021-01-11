const ProductModel = require('../models/product_model')
const CategoryModel = require('../models/category_model')
const { validationResult } = require('express-validator')

const { deleteImage } = require('../utils/imageFunctions')
const { uploadImage } = require('../config/imageStorage')

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

// FIND BY ID
exports.getProductById = (req, res, next) => {
    const {id} = req.params

    ProductModel.findByPk(id, {include: [
        {
            model: CategoryModel,
            as: 'categories',
            through: {attributes: []},
        },
            'brand'
        ], attributes: {exclude: ['brandId']}
    }).then(product => {
        if(!product){
            const err = new Error('No product found with given ID!')
            err.statusCode = 404
            throw err
        }

        res.status(200).json({
            message: 'Product fetched!',
            product: product
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

        if(req.file){
            deleteImage(req.file.path)
        }

        throw err
    }
    
    const {categories, description, price, brandId} = req.body
    const imageUrl = req.file.path

    ProductModel.create({
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
        if(req.file){
            deleteImage(req.file.path)
        }
        next(err)
    })
}

// PATCH
exports.updateProduct = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Query is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()

        if(req.file){ deleteImage(req.file.path) }

        throw err
    }

    const {id} = req.params
    const {categories, description, price, brandId} = req.body

    ProductModel.findByPk(id).then(product => {
        if(!product){
            const err = new Error('No product found with given ID!')
            err.statusCode = 404
            throw err
        }

        let imageUrl = false

        if(req.file){ imageUrl = req.file.path }

        product.description = description || product.description
        product.price = price || product.price
        product.brandId = brandId || product.brandId
        product.imageUrl = imageUrl || product.imageUrl

        product.setCategories(categories || product.categories)

        if(req.file){ deleteImage(req.file.path) }

        return product.save().then(updatedProduct => {
            res.status(200).json({
                message: 'Product updated!',
                product: updatedProduct
            })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500
            }
            if(req.file){ deleteImage(req.file.path) }
            next(err)
        })
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

        deleteImage(product.imageUrl)

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
