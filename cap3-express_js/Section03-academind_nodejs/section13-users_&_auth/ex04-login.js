/* On auth_routes.js */


/* On auth_controller.js */
exports.login = (req, res, next) => {
    const {email, password} = req.body
    let fetchedUser = null

    UserModel.findOne({email: email}) // Check email
        .then(user => {
            if(!user){
                const err = new Error('No post found with given ID.')
                err.statusCode = 404
                throw err
            }
            
            fetchedUser = user

            return bcrypt.compare(password, user.password)
        })
        .then(matchingPasswords => { // Check password
            if(!matchingPasswords){
                const err = new Error('Wrong password.')
                err.statusCode = 401
                throw err
            }

            // TODO JWT Token
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500
            }
            next(err)
        })
}