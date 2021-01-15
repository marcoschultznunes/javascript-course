const router = require('express').Router()

const tagController = require('../controllers/tag')

router.post('/', tagController.createTag)

module.exports = router
