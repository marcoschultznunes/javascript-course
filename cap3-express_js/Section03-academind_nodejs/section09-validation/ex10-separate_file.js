/*
    In this example, we'll move our validation to a separate file, so that the validation does
not pollute our routes file
*/

/* post_validators.js on the app/validators/posts/post_validators directory */
const { body } = require('express-validator')

exports.createValidation = [
    body('title')
        .isString()
        .withMessage('Title must be a text value.')
        .trim()
        .isLength({min: 2, max: 150})
        .withMessage('Title must consist of 2-150 characters'),
    body('content')
        .isString()
        .withMessage('The content must be some text')
        .trim()
        .isLength({min: 2, max: 3000})
        .withMessage('Content must consist of 2-3000 characters'),
    body('imageUrl')
        .isURL()
        .withMessage('Invalid URL format for the image')
]

/* posts_routes.js */
const express = require('express')
const router = express.Router()

const postValidators = require('../validators/posts/post_validators')
const postController = require('../controllers/posts_controller')

router.get('/', postController.getPosts)
router.post('/', postValidators.createValidation, postController.createPost)

module.exports = router
