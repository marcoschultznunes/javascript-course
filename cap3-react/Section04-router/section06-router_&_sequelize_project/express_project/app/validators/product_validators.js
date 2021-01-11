const { body } = require('express-validator')
const CategoryModel = require('../models/category_model')
const BrandModel = require('../models/brand_model')

exports.createPatchValidation = [
    body('description')
        .isString()
        .withMessage('Description must be a text value.')
        .trim()
        .isLength({min: 2, max: 150})
        .withMessage('Description must consist of 2-150 characters.'),
    body('imageUrl')
        .isURL()
        .withMessage('The image must be an URL.')
        .trim()
        .isLength({min: 10, max: 3000})
        .withMessage('The image URL must consist of 10-3000 characters.'),
    body('price')
        .isFloat({min: 1, max: 10000})
        .withMessage('Product price must be a value in the range of 1-10000.'),
    body('categories')
        .isArray()
        .withMessage('Categories must be an array.')
        .custom((value, {req}) => {
            return CategoryModel.count({where: {
                id: value
            }, disinct: true})
            .then(existingCategories => {
                if(existingCategories < value.length){
                    return Promise.reject('Some of the categories selected for this product do not exist.')
                }
            })
        }),
    body('brandId')
        .isInt()
        .withMessage("BrandId must be an integer corresponding to the brand's ID")
        .custom((value, {req}) => {
            return BrandModel.count({where: {
                id: value
            }, disinct: true})
            .then(brandCount => {
                if(brandCount != 1){
                    return Promise.reject('Brand not found.')
                }
            })
        })
]
