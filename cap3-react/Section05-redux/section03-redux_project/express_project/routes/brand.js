const router = require('express').Router()

const brandController = require('../controllers/brand')
const brandValidators = require('../validators/brand')

router.get('/',brandController.getBrands)
router.get('/:id', brandController.getBrandById)
router.post('/', brandValidators.postValidation, brandController.postBrand)
router.patch('/:id', brandValidators.patchValidation, brandController.patchBrand)
router.delete('/:id', brandController.deleteBrand)

module.exports = router
