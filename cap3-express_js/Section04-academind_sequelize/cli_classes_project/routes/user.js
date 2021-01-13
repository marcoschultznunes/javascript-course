const router = require('express').Router()

const userController = require('../controllers/user')

router.get('/', userController.fetchUsers)
router.get('/:uuid', userController.getByUuid)
router.post('/', userController.postUser)
router.patch('/:uuid', userController.updateUser)
router.delete('/:uuid', userController.deleteUser)

module.exports = router
