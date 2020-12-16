const { body } = require('express-validator')
const UserModel = require('../../models/user_model')

exports.signupValidation = [
    body('email')
        .trim()
        .normalizeEmail() // Sanitize email
        .isEmail()
        .withMessage('Invalid email format.')

        // Verifying email already registered
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

/* On auth_controller.js */
const { validationResult } = require('express-validator')

exports.signup = (req, res, next) => {
    // Validation
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Query is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()
        throw err
    }

    // Signup
    const { email, password, name } = req.body

    bcrypt.hash(password, 12)
        .then(hashedPassword => {
            const user = new UserModel({
                email: email,
                password: hashedPassword,
                name: name
            })

            return user.save()
        })
        .then(newUser => {
            return res.status(201).json({
                message: 'User successfully created!',
                user: newUser
            })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500
            }
            next(err)
        })
}


/* On auth_routes.js */
const {signupValidation} = require('../validators/auth/auth_validators')

router.post('/signup', signupValidation, authController.signup)