const express = require('express')
const router = express.Router()

const {uploadImage} = require('../config/imageUpload')
const postValidators = require('../validators/posts/post_validators')
const postController = require('../controllers/posts_controller')

router.get('/', postValidators.getPostsValidation, postController.getPosts)

router.get('/:id', postController.getPostById)
router.delete('/:id', postController.deleteById)

router.post('/', 
    uploadImage.single('image'), postValidators.createValidation, postController.createPost
)

router.patch('/:id', 
    uploadImage.single('image'), postValidators.patchValidation , postController.patchPost
)

module.exports = router