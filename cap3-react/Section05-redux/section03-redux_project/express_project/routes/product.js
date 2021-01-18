const router = require('express').Router()

const productController = require('../controllers/product')
const productValidators = require('../validators/product')

const {uploadImage} = require('../config/imageStorage')

router.get('/', productController.getProducts)
router.get('/:id', productController.getProductById)

router.post('/', 
    uploadImage.single('image'),productValidators.postValidation, 
    productController.postProduct
)

router.patch('/:id', 
    uploadImage.single('image'), productValidators.patchValidation, 
    productController.patchProduct
)

router.delete('/:id', productController.deleteProduct)

module.exports = router
