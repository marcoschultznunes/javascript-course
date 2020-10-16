const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
require('./model')
const ProductModel = mongoose.model('products')

const multer = require('multer')

// Configuring the storage
const storage = multer.diskStorage({
    // Functions that multer execute when a new file is received
    destination: (req, file, callback) => {
        callback(null, './uploads/') // p1 => error (null because this is success) p2 => folder
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + file.originalname) // p2 => file name
    }
})

const imageFilter = (req, file, callback) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        callback(null, true)
    }
    else{
        callback(new Error('File type not allowed. Only .jpeg and .png are allowed.'), false)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10 // 10 MegaBytes limit
    },
    fileFilter: imageFilter
})

const authorization = require('../../middleware/authorization')

router.get('/', (req, res, next) => {
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
                    productImage: product.productImage,
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
})
router.get('/:id', (req, res, next) => {
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
})
router.post('/', authorization, upload.single('productImage'), (req, res, next) => {
    const productObject = {
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price,

        // This req.file exists now, thanks to multer
        productImage: req.file.path
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
})
router.patch('/:id', authorization, (req, res, next) => {
    const id = req.params.id
    
    ProductModel.findOneAndUpdate({_id: id}, req.body).then(product => {
        if(product){
            res.sendStatus(200).send({message: 'Successfully updated product!'})
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})
router.delete('/:id', authorization, (req, res, next) => {
    const id = req.params.id

    ProductModel.findOneAndDelete({_id: id}).then(product => {
        if(product){
            res.sendStatus(200).send({message: 'Product deleted!'})
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
})

module.exports = router