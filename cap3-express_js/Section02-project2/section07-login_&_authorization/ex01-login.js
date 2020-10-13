/*
    First we'll make the login without generating a JWT, then in the next example we'll 
    implement the JWT
*/
router.post('/login', (req, res, next) => {
    UsersModel.findOne({email: req.body.email}).then(user => { // Find the email
        if(user.length < 1){ // Deny if no user was found
            res.status(401).send({error: {message: 'Authentication failed'}})
        } else{
            bcrypt.compare(req.body.password, user.password, (error, success) => { // Password
                if(error){ // Means the password does not match the encrypted one on the db
                    return res.status(401).send({error: {message: 'Authentication failed'}})
                }
                if(success){ // This will be where we'll send a JWT to the user
                    return res.status(200).send({message: 'Successful authentication'})
                }
                
                // If the code reaches here, it means the authentication has failed
                return res.status(401).send({error: {message: 'Authentication failed'}})
            })
        }
    }).catch(error => {
        res.status(401).send({error: {message: 'Authentication failed'}})
    })
})