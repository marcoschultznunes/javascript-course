const router = require('express').Router()

const productController = require('../controllers/product')

router.post('/', productController.postProduct)

module.exports = router
