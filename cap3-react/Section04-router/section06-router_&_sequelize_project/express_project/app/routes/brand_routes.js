const router = require('express').Router()
const brandController = require('../controllers/brand_controller')
const brandValidators = require('../validators/brand_validators')

router.post('/', brandValidators.createPatchValidation, brandController.postBrand)
router.patch('/:id', brandValidators.createPatchValidation, brandController.updateBrand)
router.delete('/:id', brandController.deleteBrand)

module.exports = router
