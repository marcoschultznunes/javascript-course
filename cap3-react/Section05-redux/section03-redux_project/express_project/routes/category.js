const router = require('express').Router()

const { authCheck } = require('../auth/authCheck')

const categoryController = require('../controllers/category')
const categoryValidators = require('../validators/category')

const {uploadImage} = require('../config/imageStorage')

router.get('/', categoryController.getCategories)
router.get('/:id', categoryController.getCategoryById)

router.post('/', 
    authCheck, uploadImage.single('image'), categoryValidators.postValidation, 
    categoryController.postCategory
)

router.patch('/:id',
    authCheck, uploadImage.single('image'), categoryValidators.patchValidation, 
    categoryController.patchCategory
)

router.delete('/:id', authCheck, categoryController.deleteCategory)

module.exports = router
