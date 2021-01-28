const router = require('express').Router()
const categoryController = require('../controllers/categories')

router.get('/', categoryController.getCategories)
router.get('/:id', categoryController.getById)
router.post('/', categoryController.postCategory)
router.delete('/:id', categoryController.deleteCategory)
router.patch('/:id', categoryController.patchCategory)

module.exports = router
