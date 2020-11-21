const express = require('express')
const router = express.Router()

const productController = require('../controllers/product_controller')


router.get('/', productController.getAllProducts)
router.get('/create', productController.getCreateProductPage)
router.post('/create', productController.postProduct)

module.exports = router