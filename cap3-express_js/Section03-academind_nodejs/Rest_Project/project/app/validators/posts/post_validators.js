const { body, query } = require('express-validator')

exports.getPostsValidation = [
    query('page')
        .optional()
        .isInt({min: 1})
        .withMessage('Post page must be a positive integer number.'),
    query('perPage')
        .optional()
        .isInt({min: 1, max: 100})
        .withMessage('Posts per page must be an integer number in the range of 1-100.')
]

exports.createValidation = [
    body('title')
        .isString()
        .withMessage('Title must be a text value.')
        .trim()
        .isLength({min: 2, max: 150})
        .withMessage('Title must consist of 2-150 characters.'),
    body('content')
        .isString()
        .withMessage('The content must be some text.')
        .trim()
        .isLength({min: 2, max: 3000})
        .withMessage('Content must consist of 2-3000 characters.')
]

exports.patchValidation = [
    body('title')
        .optional()
        .isString()
        .withMessage('Title must be a text value.')
        .trim()
        .isLength({min: 2, max: 150})
        .withMessage('Title must consist of 2-150 characters.'),
    body('content')
        .optional()
        .isString()
        .withMessage('The content must be some text.')
        .trim()
        .isLength({min: 2, max: 3000})
        .withMessage('Content must consist of 2-3000 characters.')
]
