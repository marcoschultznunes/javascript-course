/*
    We will add validators to category POST and PATCH, including a custom validator
    for unique category names. This means our test should expect a 422 instead of 500, 
    which is good, because if the response is 500 then something went wrong and the test 
    correctly fails.

    We'll also make that custom validator a separate function which can be unit tested
    by itself
*/
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
