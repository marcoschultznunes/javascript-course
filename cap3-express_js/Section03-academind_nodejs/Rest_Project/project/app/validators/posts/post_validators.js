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