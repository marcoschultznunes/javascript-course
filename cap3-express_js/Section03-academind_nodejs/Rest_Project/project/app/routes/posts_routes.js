const express = require('express')
const router = express.Router()

const {uploadImage} = require('../config/imageUpload')
const postValidators = require('../validators/posts/post_validators')
const postController = require('../controllers/posts_controller')

router.get('/', postController.getPosts)

router.post('/', 
    uploadImage.single('image'), postValidators.createValidation, postController.createPost
)

module.exports = router