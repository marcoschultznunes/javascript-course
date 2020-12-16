const { body } = require('express-validator')
const UserModel = require('../../models/user_model')

exports.signupValidation = [
    body('email')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Invalid email format.')
        .custom((value, {req}) => {
            return UserModel.findOne({email: value}).then(registered_user => {
                if(registered_user){
                    return Promise.reject('Email address is already used.')
                }
            })
        }),
    body('password')
        .isString()
        .withMessage('Password must be a string.')
        .trim()
        .isLength({min: 10, max: 80})
        .withMessage('Password must contain 10-80 characters.'),
    body('name')
        .isString()
        .withMessage('Name must be a string.')
        .trim()
        .isLength({min: 5, max: 200})
        .withMessage('Name must contain 5-200 characters.')
]