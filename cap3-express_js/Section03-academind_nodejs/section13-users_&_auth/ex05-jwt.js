/* 
    npm install --save jsonwebtoken
*/

/* The login function */
exports.login = (req, res, next) => {
    const {email, password} = req.body
    let fetchedUser = null

    UserModel.findOne({email: email})
        .then(user => {
            if(!user){
                const err = new Error('No post found with given ID.')
                err.statusCode = 404
                throw err
            }
            
            fetchedUser = user

            return bcrypt.compare(password, user.password)
        })
        .then(matchingPasswords => {
            if(!matchingPasswords){
                const err = new Error('Wrong password.')
                err.statusCode = 401
                throw err
            }

            // JWT
            const token = jwt.sign({
                email: fetchedUser.email,
                userId: fetchedUser.userId
            }, 'secretkeyHAHAHAlol', {
                expiresIn: '1h'
            }) 

            return res.status(200).json({
                token: token,
                userId: fetchedUser._id.toString()
            })


        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500
            }
            next(err)
        })
}
