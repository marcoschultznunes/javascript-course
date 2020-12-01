const ProductModel = require('../models/ProductModel')

exports.getAllProducts = (req, res, next) => {
    const products = ProductModel.fetchAll()

    return res.status(200).render('products', {
        pageTitle: 'Products',
        products: products
    })
}

exports.getCreateProductPage = (req, res, next) => {
    return res.status(200).render('product_form', {
        pageTitle: 'Create Product',
        action: 'Create',
        product: null
    })
}

exports.postProduct = (req, res, next) => {
    const {name, brand, price} = req.body

    const product = new ProductModel(name, brand, price)
    product.save()

    return res.redirect('/products')
}

exports.getProductUpdatePage = (req, res, next) => {
    const id = req.params.id

    product = ProductModel.getProduct(id)
    
    if(product){
        return res.status(200).render('product_form', {
            pageTitle: 'Update Product',
            action: 'Update',
            product: product
        })
    }
    
    return res.status(404).render('not_found', {
        pageTitle: 'Product Not Found',
        error_message: 'Product not found'
    })
}

exports.updateProduct = (req, res) => {
    const id = req.params.id
    
    const success = ProductModel.updateProduct(id, req.body)

    if(success){
        return res.status(200).redirect('/products')
    } else{
        return res.status(404).render('not_found', {
            pageTitle: 'Product Not Found',
            error_message: 'Product not found'
        })
    }
}

exports.deleteProduct = (req, res) => {
    const id = req.params.id

    const success = ProductModel.deleteProduct(id)

    if(success){
        res.status(200).redirect('/products')
    } else{
        return res.status(404).render('not_found', {
            pageTitle: 'Product Not Found',
            error_message: 'Product not found'
        })
    }
}