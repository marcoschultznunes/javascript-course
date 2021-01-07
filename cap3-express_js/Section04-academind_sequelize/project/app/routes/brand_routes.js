const express = require('express')
const router = express.Router()

const brand_controller = require('../controllers/brand_controller')

router.get('/', brand_controller.brandIndex)
router.post('/', brand_controller.createBrand)
router.patch('/:id', brand_controller.updateBrand)
router.delete('/:id', brand_controller.deleteBrand)

module.exports = router