const router = require('express').Router()

const productController = require('../controllers/product')

router.get('/', productController.getProducts)
router.get('/:id', productController.getProductById)
router.post('/', productController.postProduct)
router.patch('/:id', productController.patchProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router
