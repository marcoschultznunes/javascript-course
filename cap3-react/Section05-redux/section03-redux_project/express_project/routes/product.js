const router = require('express').Router()

const {authCheck} = require('../auth/authCheck')

const productController = require('../controllers/product')
const productValidators = require('../validators/product')

const {uploadImage} = require('../config/imageStorage')

router.get('/', productController.getProducts)
router.get('/:id', productController.getProductById)

router.post('/', 
    authCheck, uploadImage.single('image'),productValidators.postValidation, 
    productController.postProduct
)

router.patch('/:id', 
    authCheck, uploadImage.single('image'), productValidators.patchValidation, 
    productController.patchProduct
)

router.delete('/:id', authCheck, productController.deleteProduct)

module.exports = router
