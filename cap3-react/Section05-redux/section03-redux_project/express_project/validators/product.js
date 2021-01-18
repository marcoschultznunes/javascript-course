const {body} = require('express-validator')
const {Brand, Category} = require('../models')

exports.postValidation = [
    body('brandId')
        .custom((value, {req}) => {
            return Brand.findByPk(value).then(brand => {
                if(!brand){
                    return Promise.reject('Brand not found.')
                }
            })
        }),
    body('categories')
        .isArray()
        .withMessage('Categories must be an array.')
        .custom((value, {req}) => {
            return Category.count({where: {
                id: value
            }, disinct: true})
            .then(existingCategories => {
                if(existingCategories < value.length){
                    return Promise.reject('Some of the categories selected for this product do not exist.')
                }
            })
        }),
    body('price')
        .isFloat({min: 1, max: 10000})
        .withMessage('Product price must be a value in the range of 1-10000.'),
    body('description')
        .isString()
        .withMessage('Product description must be a text value.')
        .trim()
        .isLength({min: 5, max: 200})
        .withMessage('Product description must consist of 5-200 characters.')
]

exports.patchValidation = [
    body('brandId')
        .optional()
        .custom((value, {req}) => {
            return Brand.findByPk(value).then(brand => {
                if(!brand){
                    return Promise.reject('Brand not found.')
                }
            })
        }),
    body('categories')
        .optional()
        .isArray()
        .withMessage('Categories must be an array.')
        .custom((value, {req}) => {
            return Category.count({where: {
                id: value
            }, disinct: true})
            .then(existingCategories => {
                if(existingCategories < value.length){
                    return Promise.reject('Some of the categories selected for this product do not exist.')
                }
            })
        }),
    body('price')
        .optional()
        .isFloat({min: 1, max: 10000})
        .withMessage('Product price must be a value in the range of 1-10000.'),
    body('description')
        .optional()
        .isString()
        .withMessage('Product description must be a text value.')
        .trim()
        .isLength({min: 5, max: 200})
        .withMessage('Product description must consist of 5-200 characters.')
]
