const express = require('express')
const router = express.Router()

const {uploadImage} = require('../config/imageUpload')
const postValidators = require('../validators/posts/post_validators')
const postController = require('../controllers/posts_controller')
const {authCheck} = require('../authorization/authCheck')

router.get('/', 
    postValidators.getPostsValidation, 
    postController.getPosts
)

router.get('/:id', 
    postController.getPostById
)

router.delete('/:id', 
    authCheck, 
    postController.deleteById
)

router.post('/', 
    authCheck, 
    uploadImage.single('image'), 
    postValidators.createValidation, 
    postController.createPost
)

router.patch('/:id',
    authCheck,
    uploadImage.single('image'), 
    postValidators.patchValidation, 
    postController.patchPost
)

module.exports = router
