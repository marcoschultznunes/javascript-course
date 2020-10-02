const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
require('./model')
const ProductModel = mongoose.model('products')

router.get('/', (req, res, next) => {
    ProductModel.find().then(products => {
        res.json(products)
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})
router.get('/:id', (req, res, next) => {
    const id = req.params.id

    ProductModel.findById(id).then(product => {
        if(product){
            res.json(product)
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})
router.post('/', (req, res, next) => {
    const productObject = {
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price
    }

    const product = new ProductModel(productObject)

    product.save().then(() => {
        res.sendStatus(201)
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})
router.patch('/:id', (req, res, next) => {
    const id = req.params.id
    
    ProductModel.findOneAndUpdate({_id: id}, req.body).then(product => {
        if(product){
            res.sendStatus(200)
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})
router.delete('/:id', (req, res, next) => {
    const id = req.params.id

    ProductModel.findOneAndDelete({_id: id}).then(product => {
        if(product){
            res.sendStatus(200)
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})

module.exports = router