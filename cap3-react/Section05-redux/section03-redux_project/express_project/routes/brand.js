const router = require('express').Router()

const brandController = require('../controllers/brand')

router.get('/', brandController.getBrands)
router.get('/:id', brandController.getBrandById)
router.post('/', brandController.postBrand)
router.patch('/:id', brandController.patchBrand)
router.delete('/:id', brandController.deleteBrand)

module.exports = router
