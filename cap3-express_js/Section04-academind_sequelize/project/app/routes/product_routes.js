const express = require('express')
const router = express.Router()

const product_controller = require('../controllers/product_controller')

router.get('/', product_controller.productIndex)
router.get('/:id', product_controller.getById)
router.post('/', product_controller.createProduct)
router.patch('/:id', product_controller.updateProduct)
router.delete('/:id', product_controller.deleteProduct)

module.exports = router
