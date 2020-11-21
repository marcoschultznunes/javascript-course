/*
    We'll now add models to our application, the product model. It will be similar to 
    Spring's models, an ES6 class with a constructor containing the fields of the object and
    CRUD functions. We'll also move our products array from the controller to the model.
*/

/* The ProductModel.js */
const products = [
    {
        name: 'Knife',
        brand: 'Tramontina',
        price: 16
    },
    {
        name: 'PC Desktop',
        brand: 'Dell',
        price: 2600
    },
    {
        name: 'Fan',
        brand: 'Arno',
        price: 180
    }
]

class Product {
    constructor(name, brand, price){
        this.name = name
        this.brand = brand
        this.price = price
    }

    save(){
        products.push(this)
    }

    static fetchAll(){
        return products
    }
}

module.exports = Product


/* product_controller.js */
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

/* 
    It is just like in Spring 
*/