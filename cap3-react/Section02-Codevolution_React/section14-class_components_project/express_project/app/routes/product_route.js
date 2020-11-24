const express = require('express')
const router = express.Router()

const productController = require('../controllers/product_controller')

router.get('/', productController.getProductIndex)
router.get('/:id', productController.getProduct)
router.post('/', productController.postProduct)
router.patch('/:id', productController.patchProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router