const mongoose = require('mongoose')

require('../models/product_model')
const ProductModel = mongoose.model('products')

exports.getProductIndex = (req, res) => {
    ProductModel.find()
    .select('-__v') // Excludes the internal field __v from the response
    .then(products => {
        responseObject = {
            numOfProducts: products.length,
            products: products.map(product => {
                return {
                    _id: product._id,
                    name: product.name,
                    brand: product.brand,
                    price: product.price,
                    inStock: product.inStock,
                    request:{
                        method: 'GET',
                        url: 'http://localhost:8083/products/' + product._id
                    }
                }
            })
        }

        res.json(responseObject)
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
}

exports.getProduct = (req, res) => {
    const id = req.params.id

    ProductModel.findById(id)
    .select('-__v') // Excludes the internal field __v from the response
    .then(product => {
        if(product){
            res.json(product)
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
}

exports.postProduct = (req, res) => {
    if(req.body.name.length < 3){
        return res.status(400).send('Not enough characters in name field')
    }
    if(req.body.brand.length < 3){
        return res.status(400).send('Not enough characters in brand field')
    }
    if(!Number(req.body.price)){
        return res.status(400).send('Price should be an integer or a decimal')
    }
    if(!Number.isInteger(Number(req.body.inStock))){
        return res.status(400).send('Stock requires an integer')
    }

    const productObject = {
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,
        inStock: req.body.inStock
    }

    const product = new ProductModel(productObject)

    product.save().then(productCreated => {
        responseObject = {
            message: 'Product successfully created',
            createdProduct: {
                method: 'GET',
                url: 'http://localhost:8083/products/' + productCreated._id
            }
        }

        res.status(201).json(responseObject)
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
}

exports.patchProduct = (req, res) => {
    const id = req.params.id
    
    ProductModel.findOneAndUpdate({_id: id}, req.body).then(product => {
        if(product){
            res.status(200).send({message: 'Successfully updated product!'})
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
}

exports.deleteProduct = (req, res) => {
    const id = req.params.id

    ProductModel.findOneAndDelete({_id: id}).then(product => {
        if(product){
            return res.status(200).send({message: 'Product deleted!'})
        } else{
            return res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
}