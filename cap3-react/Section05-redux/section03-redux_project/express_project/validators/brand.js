const {body} = require('express-validator')

exports.postValidation = [
    body('name')
        .isString()
        .withMessage('Brand name must be a text value.')
        .trim()
        .isLength({min: 2, max: 100})
        .withMessage('Brand name must consist of 2-100 characters.')
]

exports.patchValidation = [
    body('name')
        .isString()
        .withMessage('Brand name must be a text value.')
        .trim()
        .isLength({min: 2, max: 100})
        .withMessage('Brand name must consist of 2-100 characters.')
]
