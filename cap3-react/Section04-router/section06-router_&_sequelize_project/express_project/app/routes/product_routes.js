const router = require('express').Router()
const productController = require('../controllers/product_controller')
const productValidators = require('../validators/product_validators')

router.get('/', productController.getProducts)
router.post('/', productValidators.createPatchValidation, productController.postProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router
