const router = require('express').Router()

const userController = require('../controllers/user')
const userValidators = require('../validators/user')

router.post('/signup', userValidators.signupValidation, userController.signUp)
router.post('/login', userValidators.loginValidation, userController.login)
router.post('/verify', userValidators.verificationValidation, userController.verifyUser)

router.get('/users', userController.getUsers)
router.delete('/users/:id', userController.deleteUser)

module.exports = router
