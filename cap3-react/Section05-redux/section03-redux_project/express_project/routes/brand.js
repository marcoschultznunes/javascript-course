const router = require('express').Router()

const { authCheck } = require('../auth/authCheck')

const brandController = require('../controllers/brand')
const brandValidators = require('../validators/brand')

router.get('/',brandController.getBrands)
router.get('/:id', brandController.getBrandById)
router.post('/', authCheck, brandValidators.postValidation, brandController.postBrand)
router.patch('/:id', authCheck, brandValidators.patchValidation, brandController.patchBrand)
router.delete('/:id', authCheck, brandController.deleteBrand)

module.exports = router
