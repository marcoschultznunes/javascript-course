const express = require('express')
const router = express.Router()

const product_controller = require('../controllers/product_controller')

router.get('/', product_controller.productIndex)

module.exports = router
