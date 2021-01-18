const {Product, Brand, Category} = require('../models')
const {validationResult} = require('express-validator')
const {deleteImage} = require('../utils/imageFunctions')

exports.getProducts = async (req, res, next) => {
    try{
        const products = await Product.findAll({ include: [
            {model: Brand, as: 'brand'}, 
            {model: Category, as: 'categories', through: {attributes: []} }
        ] })

        return res.status(200).json({
            message: 'Successfully fetched products!',
            products: products
        })

    } catch(err) {
        next(err)
    }
} 

exports.getProductById = async (req, res, next) => {
    try{
        const {id} = req.params

        const product = await Product.findByPk(id, { include: [
            {model: Brand, as: 'brand'}, 
            {model: Category, as: 'categories', through: {attributes: []} }
        ] })

        if(!product){
            const err = new Error('Product not found!')
            err.statusCode = 404
            throw err
        }

        return res.status(200).json({
            message: 'Successfully fetched products!',
            product: product
        })

    } catch(err) {
        next(err)
    }
} 

// POST
exports.postProduct = async (req, res, next) => {
    try{
        if(!req.file){
            const err = new Error('Validation failed. No image provided.')
            err.statusCode = 422
            throw err
        }

        const errors = validationResult(req)
        
        if(!errors.isEmpty()){
            const err = new Error('Validation failed. Entered data is incorrect!')
            err.statusCode = 422
            err.errors = errors.array()

            if(req.file){
                deleteImage(req.file.path)
            }

            throw err
        }

        const {description, price, categories, brandId} = req.body
        const imageUrl = req.file.path

        const newProduct = await Product.create({
            description: description, price: price, image: imageUrl, brandId: brandId
        })

        await newProduct.setCategories(categories)

        return res.status(201).json({
            message: 'Product created!',
            category: newProduct
        })

    } catch(err) {
        if(req.file){
            deleteImage(req.file.path)
        }
        next(err)
    }
}

exports.patchProduct = async (req, res, next) => {
    try{
        const errors = validationResult(req)
        
        if(!errors.isEmpty()){
            const err = new Error('Validation failed. Entered data is incorrect!')
            err.statusCode = 422
            err.errors = errors.array()

            if(req.file){
                deleteImage(req.file.path)
            }

            throw err
        }

        const {id} = req.params
        const {description, price, image, categories, brandId} = req.body

        const product = await Product.findByPk(id)

        if(!product){
            const err = new Error('Product not found!')
            err.statusCode = 404
            throw err
        }

        let imageUrl = false

        if(req.file){
            imageUrl = req.file.path
        }

        product.description = description || product.description
        product.price = price || product.price
        product.image = imageUrl || product.image
        product.brandId  = brandId || product.brandId

        const newProduct = await product.save()

        if(categories){
            await newProduct.setCategories(categories)
        }

        return res.status(201).json({
            message: 'Product updated!',
            category: newProduct
        })

    } catch(err) {
        if(req.file){
            deleteImage(req.file.path)
        }
        next(err)
    }
}

exports.deleteProduct = async (req, res, next) => {
    try{
        const {id} = req.params

        const product = await Product.findByPk(id)

        if(!product){
            const err = new Error('Product not found!')
            err.statusCode = 404
            throw err
        }

        await product.destroy()

        return res.status(200).json({
            message: "Product deleted!"
        })

    } catch(err) {
        next(err)
    }
}
