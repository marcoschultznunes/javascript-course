const express = require('express')
const router = express.Router()

const postValidators = require('../validators/posts/post_validators')
const postController = require('../controllers/posts_controller')

router.get('/', postController.getPosts)
router.post('/', postValidators.createValidation, postController.createPost)

module.exports = router