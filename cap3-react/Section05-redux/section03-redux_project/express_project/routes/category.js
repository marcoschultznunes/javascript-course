const router = require('express').Router()

const categoryController = require('../controllers/category')

router.post('/', categoryController.postCategory)

module.exports = router
