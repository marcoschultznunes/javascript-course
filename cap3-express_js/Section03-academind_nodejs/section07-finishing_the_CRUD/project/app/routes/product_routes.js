const express = require('express')
const router = express.Router()

const productController = require('../controllers/product_controller')


router.get('/', productController.getAllProducts)
router.get('/create', productController.getCreateProductPage)
router.get('/:id', productController.getProductUpdatePage)
router.post('/create', productController.postProduct)
router.post('/update/:id', productController.updateProduct)
router.get('/delete/:id', productController.deleteProduct)

module.exports = router