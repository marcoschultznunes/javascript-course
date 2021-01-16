const {Product, Brand, Category} = require('../models')

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

exports.postProduct = async (req, res, next) => {
    try{
        const {description, price, image, categories, brandId} = req.body

        const newProduct = await Product.create({
            description: description, price: price, image: image, brandId: brandId
        })

        await newProduct.setCategories(categories)

        return res.status(201).json({
            message: 'Product created!',
            category: newProduct
        })

    } catch(err) {
        next(err)
    }
}

exports.patchProduct = async (req, res, next) => {
    try{
        const {id} = req.params
        const {description, price, image, categories, brandId} = req.body

        const product = await Product.findByPk(id)

        if(!product){
            const err = new Error('Product not found!')
            err.statusCode = 404
            throw err
        }

        product.description = description || product.description
        product.price = price || product.price
        product.image = image || product.image
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
