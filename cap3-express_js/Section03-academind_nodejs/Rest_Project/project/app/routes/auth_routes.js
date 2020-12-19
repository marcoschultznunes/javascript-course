const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth_controller')
const {signupValidation} = require('../validators/auth/auth_validators')

router.post('/signup', signupValidation, authController.signup)
router.post('/login', authController.login)
router.get('/cookie', authController.getJwtCookie)

module.exports = router