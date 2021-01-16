const router = require('express').Router()

const categoryController = require('../controllers/category')

router.get('/', categoryController.getCategories)
router.get('/:id', categoryController.getCategoryById)
router.post('/', categoryController.postCategory)
router.patch('/:id', categoryController.patchCategory)
router.delete('/:id', categoryController.deleteCategory)

module.exports = router
