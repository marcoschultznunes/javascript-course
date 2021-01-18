const router = require('express').Router()

const categoryController = require('../controllers/category')
const categoryValidators = require('../validators/category')

const {uploadImage} = require('../config/imageStorage')

router.get('/', categoryController.getCategories)
router.get('/:id', categoryController.getCategoryById)

router.post('/', 
    uploadImage.single('image'), categoryValidators.postValidation, 
    categoryController.postCategory
)

router.patch('/:id',
    uploadImage.single('image'), categoryValidators.patchValidation, 
    categoryController.patchCategory
)

router.delete('/:id', categoryController.deleteCategory)

module.exports = router
