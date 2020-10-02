/*
    The product model (model.js file):
*/
const mongoose = require('mongoose')

mongoose.model('products', {
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: false
    },
    price:{
        type: Number,
        required: true
    }
}, 'products')


/*
    Adding bodyParser to the APP.JS file:
*/
const bodyParser = require('body-parser')
app.use(bodyParser.json())


/*
    Changes in the routes.js:
*/

// 1 - Calling the model:
const mongoose = require('mongoose')
require('./model')
const ProductModel = mongoose.model('products')

// 2 - The POST request:
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