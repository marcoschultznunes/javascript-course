router.post('/', (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (error, hash) => { // The bcrypt function to hash
        if(error){ // If error occurs while hashing
            return res.status(500).json({error: error})
        } else{ // If successful hash, we procceed with the post
            const userObject = {
                email: req.body.email,
                password: hash // We use the hash variable from the callback
            }
            user = new UsersModel(userObject)
            user.save().then(userCreated => {
                res.status(201).json({
                    message: 'User successfully created!',
                    createdUser: {
                        method: 'GET',
                        url: 'http://localhost:8083/users/' + userCreated._id
                    }
                })
            }).catch(error => {
                res.status(400).send({error: {message: error.message}})
            })
        }
    })
})

/*
    The problem with this is that we can have multiple users with the same email, we will 
    disallow that in part 2. Later on, we will make the password have a minimum and maximum
    amount of characters. Then, we will make email confirmation and validation.

    https://stackoverflow.com/questions/52456065/how-to-format-and-validate-email-node-js

    You can use email validator module:
        var validator = require("email-validator")
        validator.validate("test@email.com")
*/