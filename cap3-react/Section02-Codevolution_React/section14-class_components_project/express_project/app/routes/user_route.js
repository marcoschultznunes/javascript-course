const express = require('express')
const router = express.Router()

const userController = require('../controllers/user_controller')

router.get('/', userController.getUserIndex)
router.get('/:id', userController.getUser)
router.post('/', userController.postUser)
router.patch('/:id', userController.patchUser)
router.delete('/:id', userController.deleteUser)


module.exports = router 