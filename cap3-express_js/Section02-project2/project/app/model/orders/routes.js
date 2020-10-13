const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
require('./model')
require('../products/model')
const OrderModel = mongoose.model('orders')
const ProductModel = mongoose.model('products')

const authorization = require('../../middleware/authorization')

router.get('/', authorization, (req, res, next) => {
    OrderModel.find()
    .select('-__v')
    .then(orders => {
        responseObject = { 
            numOfOrders: orders.length,
            orders: orders.map(order => {
                return {
                    _id: order._id,
                    product: order.product,
                    quantity: order.quantity,
                    request: {
                        method: 'GET',
                        url: 'http://localhost:8083/orders/' + order._id
                    }
                }
            })
        }

        res.status(200).json(responseObject)
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})
router.get('/:id', authorization, (req, res, next) => {
    const id = req.params.id

    OrderModel.findById({_id: id})
    .select('-__v')
    .then(order => {
        if(order){
            ProductModel.findById(order.product)
            .select('-__v')
            .then(product => {
                if(product){
                    const responseObject = {
                        _id: order._id,
                        product: {
                            _id: product._id,
                            name: product.name,
                            brand: product.brand,
                            price: product.price,
                            request: {
                                method: 'GET',
                                url: 'http://localhost:8083/products/' + product._id
                            }
                        },
                        quantity: order.quantity
                    }
                    
                    res.json(responseObject)
                } else {
                    res.status(404).send({error: {message: "The order's product was not found."}})
                }
            }).catch(error => {
                res.status(400).send({error: {message: error.message}})
            })   
        } else{
            res.status(404).send({error: {message: 'Order not found.'}})
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})

router.post('/', authorization, (req, res, next) => {
    ProductModel.findById(req.body.product).then(product => {
        if(product){
            const orderObject = {
                product: req.body.product,
                quantity: req.body.quantity
            } 
        
            const order = new OrderModel(orderObject)
        
            order.save().then((order) => {
                responseObject = {
                    message: 'Order created!',
                    createdOrder: {
                        method: 'GET',
                        url: 'http://localhost:8083/orders/' + order._id
                    }
                }
                res.status(201).json(responseObject)
            }).catch(error => {
                res.status(400).send({error: {message: error.message}})
            })
        } 
        else{
            res.status(404).send('Product not found.') 
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
}) 
router.patch('/:id', authorization, (req, res, next) => {
    const id = req.params.id

    ProductModel.findById(req.body.product).then(product => {
        if(product || req.body.product === undefined){
            if(req.body.quantity < 1){
                req.body.quantity = 1
            }

            OrderModel.findByIdAndUpdate({_id: id}, req.body).then((order) => {
                if(order){                    
                    res.status(200).send({
                        message: 'Order successfully updated!', 
                        orderRequest: {
                            method: 'GET',
                            url: 'http://localhost:8083/orders/' + order._id
                        }
                    })
                } else{
                    res.status(404).send({message: 'Order not found.'})
                }
            }).catch(error => {
                res.status(400).send({error: {message: error.message}})
            })
 
        } else{
            res.status(404).send({message: 'Product not found.'})
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})
router.delete('/:id', authorization, (req, res, next) => {
    const id = req.params.id

    OrderModel.findByIdAndDelete({_id: id}).then(order => {
        if(order){
            res.status(200).send({message: 'Order successfully deleted!'})
        } else{
            res.status(404).send({error: {message: 'Order not found.'}})
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})

module.exports = router 