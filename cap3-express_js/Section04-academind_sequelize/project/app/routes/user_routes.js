const express = require('express')
const router = express.Router()

const user_controller = require('../controllers/user_controller')

router.get('/', user_controller.userIndex)
router.get('/:id', user_controller.getById)
router.post('/', user_controller.createUser)
router.patch('/:id', user_controller.updateUser)
router.delete('/:id', user_controller.deleteUser)

module.exports = router
