const router = require('express').Router()
const categoryController = require('../controllers/category_controller')
const categoryValidators = require('../validators/category_validators')

router.get('/', categoryController.getCategories)
router.get('/:id', categoryController.getCategoryById)
router.post('/', categoryValidators.createPatchValidation, categoryController.postCategory)
router.patch('/:id', categoryValidators.createPatchValidation, categoryController.updateCategory)
router.delete('/:id', categoryController.deleteCategory)

module.exports = router
