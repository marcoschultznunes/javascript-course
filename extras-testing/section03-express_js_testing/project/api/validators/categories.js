const {body} = require('express-validator')
const CategoryModel = require('../models/categories')

duplicateNameValidation = async (name) => {
    const category = await CategoryModel.findOne({name})

    if(category){
        throw Error()
    }
}

exports.postValidation = [
    body('name')
        .isString()
        .withMessage('Category name must be a text value.')
        .trim()
        .isLength({min: 2, max: 100})
        .withMessage('Category name must consist of 2-100 characters.')
        .custom(duplicateNameValidation)
        .withMessage('Category already exists!')
]

exports.patchValidation = [
    body('name')
        .optional()
        .isString()
        .withMessage('Category name must be a text value.')
        .trim()
        .isLength({min: 2, max: 100})
        .withMessage('Category name must consist of 2-100 characters.')
        .custom(duplicateNameValidation)
        .withMessage('Category already exists!')
]
