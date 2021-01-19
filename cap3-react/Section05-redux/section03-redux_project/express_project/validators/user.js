const {body} = require('express-validator')
const {User} = require('../models')

exports.signupValidation = [
    body('email')
        .isString()
        .withMessage('Email must be a text value.')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Incorrect email format.')
        .isLength({min: 10, max: 200})
        .withMessage('Email must consist of 5-200 characters.')
        .custom(async (value) => {
            const registered_user = await User.findOne({where: {email: value}})

            if(registered_user){
                return Promise.reject('Email address is already used.')
            }
        }),
    body('name')
        .isString()
        .withMessage('Name must be a text value.')
        .trim()
        .custom(value => !/\s/.test(value))
        .withMessage('No white spaces allowed for the first name.')
        .isLength({min: 2, max: 60})
        .withMessage('Name must consist of 2-60 characters.'),
    body('surname')
        .isString()
        .withMessage('Surname must be a text value.')
        .trim()
        .replace(/ +(?= )/g, '')
        .isLength({min: 2, max: 200})
        .withMessage('Surname must consist of 2-200 characters.'),
    body('password')
        .isString()
        .withMessage('Password must be a text value.')
        .trim()
        .custom(value => !/\s/.test(value))
        .withMessage('No white spaces allowed for passwords.')
]

exports.loginValidation = [
    body('email')
        .isString()
        .withMessage('Email must be a text value.')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Incorrect email format.')
        .isLength({min: 10, max: 200})
        .withMessage('Email must consist of 5-200 characters.'),
    body('password')
        .isString()
        .withMessage('Password must be a text value.')
        .trim()
        .custom(value => !/\s/.test(value))
        .withMessage('No white spaces allowed for passwords.')
]

exports.verificationValidation = [
    body('email')
        .isString()
        .withMessage('Email must be a text value.')
        .trim()
        .normalizeEmail()
        .isEmail()
        .withMessage('Incorrect email format.')
        .isLength({min: 10, max: 200})
        .withMessage('Email must consist of 5-200 characters.'),
    body('token')
        .isString()
        .withMessage('The validation token must be a text value.')
        .trim()
        .custom(value => !/\s/.test(value))
        .withMessage('No white spaces allowed for validation tokens.')
]
