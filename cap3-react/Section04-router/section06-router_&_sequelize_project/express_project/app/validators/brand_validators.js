const { body } = require('express-validator')

exports.createPatchValidation = [
    body('name')
        .isString()
        .withMessage('Name must be a text value.')
        .trim()
        .isLength({min: 2, max: 100})
        .withMessage('Name must consist of 2-100 characters.')
]
