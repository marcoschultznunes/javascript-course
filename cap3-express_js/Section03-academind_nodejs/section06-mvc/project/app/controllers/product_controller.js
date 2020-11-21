const ProductModel = require('../models/ProductModel')

exports.getAllProducts = (req, res, next) => {
    const products = ProductModel.fetchAll()

    return res.status(200).render('products', {
        pageTitle: 'Products',
        products: products
    })
}

exports.getCreateProductPage = (req, res, next) => {
    return res.status(200).render('create_product', {
        pageTitle: 'Create Product'
    })
}

exports.postProduct = (req, res, next) => {
    const {name, brand, price} = req.body

    const product = new ProductModel(name, brand, price)
    product.save()

    return res.redirect('/products')
}