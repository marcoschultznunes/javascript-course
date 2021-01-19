const router = require('express').Router()

const userController = require('../controllers/user')

router.post('/signup', userController.signUp)
router.post('/login', userController.login)
router.post('/verify', userController.verifyUser)
router.get('/users', userController.getUsers)
router.delete('/users/:id', userController.deleteUser)

module.exports = router
