// First we will install email-validator
// npm install email-validator

// Requiring email-validator
const emailValidator = require('email-validator')

// The post
router.post('/', (req, res, next) => {
    // Password length validation
    if(req.body.password.length < 8 || req.body.password.length > 30){ 
        return res.status(400).send({
            error: {message: "The password must have between 8 and 30 characters"}
        })
    }

    // Deny if password contains whitespace 
    if(req.body.password.includes(' ')){
        return res.status(400).send({
            error: {message: "The password must not contain whitespaces"}
        })
    }

    // Email validator with the email-validator package
    if(!emailValidator.validate(req.body.email)){
        return res.status(400).send({
            error: {message: "Invalid email format"}
        })
    }

    // Email already registered validation
    UsersModel.find({email: req.body.email}).then(user => {
        if(user.length >= 1){ // If there is at least one user with the email, deny it 
            return res.status(409).send({
                error: {message: 'There is already an user with the email ' + req.body.email}
            })
        } else{ // If there are no users with the email, proceed as the previous example showed
            bcrypt.hash(req.body.password, 10, (error, hash) => {
                if(error){
                    return res.status(500).json({error: error})
                } else{
                    const userObject = {
                        email: req.body.email,
                        password: hash
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
        }
    })
})

/*
    Later i will add email verification in extra sections.
*/