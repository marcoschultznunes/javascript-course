const BrandModel = require('../models/brand_model')
const ProductModel = require('../models/product_model')

exports.productIndex = (req, res, next) => {
    ProductModel.findAll({include: BrandModel, attributes: {exclude:['brandId']} })
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

    ProductModel.findByPk(id, {include: BrandModel, attributes: {exclude:['brandId']} })
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

exports.createProduct = (req, res, next) => {
    const {description, brandId, price, imageUrl} = req.body

    BrandModel.findByPk(brandId)
        .then(brand => {
            if(!brand){
                const err = new Error('No brand found with given ID!')
                err.statusCode = 404
                throw err
            }

            return ProductModel.create({
                description: description,
                brandId: brandId,
                price: price,
                image: imageUrl
            })
        })
    .then((createdProduct) => {
        res.status(201).json({message: 'Product created!', product: createdProduct})
    })
    .catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not create product.'
        res.status(statusCode).json({message: errMessage})
    })
}
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
exports.updateProduct = (req, res, next) => {
    const {id} = req.params
    const {description, brandId, price, imageUrl} = req.body

    const brandFilter = {}

    if(brandId){
        brandFilter.id = brandId
    }

    BrandModel.findOne(brandFilter)
    .then(brand => {
        if(!brand){
            const err = new Error('No brand found with given ID!')
            err.statusCode = 404
            throw err
        }

        return ProductModel.findByPk(id)
    })
    .then(product => {
        if(!product){
            const err = new Error('No product found with given ID!')
            err.statusCode = 404
            throw err
        }

        product.description = description || product.description
        product.brandId = brandId || product.brandId
        product.price = price || product.price
        product.imageUrl = imageUrl || product.image

        return product.save()
    })
    .then((newProduct) => {
        res.status(200).json({
            message: 'Product successfully updated!',
            product: newProduct
        })
    })
    .catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not update product.'
        res.status(statusCode).json({message: errMessage})
    })
}
