const router = require('express').Router()
const productController = require('../controllers/product_controller')
const productValidators = require('../validators/product_validators')
const imageStorage = require('../config/imageStorage')

router.get('/', productController.getProducts)
router.get('/:id', productController.getProductById)
router.post('/', imageStorage.uploadImage.single('image'), productValidators.createValidation, productController.postProduct)
router.patch('/:id', imageStorage.uploadImage.single('image'), productValidators.patchValidation, productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router
