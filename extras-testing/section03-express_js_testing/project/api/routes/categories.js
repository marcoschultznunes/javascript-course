const router = require('express').Router()
const categoryController = require('../controllers/categories')
const categoryValidators = require('../validators/categories')

router.get('/', categoryController.getCategories)
router.get('/:id', categoryController.getById)
router.post('/', categoryValidators.postValidation, categoryController.postCategory)
router.delete('/:id', categoryController.deleteCategory)
router.patch('/:id', categoryValidators.patchValidation, categoryController.patchCategory)

module.exports = router
