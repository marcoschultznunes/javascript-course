const express = require('express')
const router = express.Router()

const category_controller = require('../controllers/category_controller')

router.get('/', category_controller.categoryIndex)
router.post('/', category_controller.createCategory)
router.delete('/:id', category_controller.deleteCategory)

module.exports = router
