/* 
    npm install --save bcrypt 
*/

/* auth_controller.js */
const UserModel = require('../models/user_model')
const bcrypt = require('bcrypt')

exports.signup = (req, res, next) => {
    const { email, password, name } = req.body

    bcrypt.hash(password, 12) // p2 => salt rounds
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
router.post('/signup', authController.signup)
