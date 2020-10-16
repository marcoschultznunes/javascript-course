/*
    https://stackoverflow.com/questions/39092822/how-to-do-confirm-email-address-with-express-node

    To make the verificiation email, we'll use the library called crypto random string
        npm install crypto-random-string

    We'll make an email during the signup request with an url to another service (the one
    that will make the verification) and his 1 and the token as a url param.
    
    The token will also be added to the database and the verified boolean field. Also, 
    a verification expiration date field will be added, for more security.
*/

// Add the fields to the users model
 

// The signup route 
const randCrypto = require('crypto-random-string')
const { Mongoose } = require('mongoose')

router.post('/', (req, res, next) => {
    if(req.body.password.length < 8 || req.body.password.length > 30){
        return res.status(400).send({
            error: {message: "The password must have between 8 and 30 characters"}
        })
    }

    if(req.body.password.includes(' ')){
        return res.status(400).send({
            error: {message: "The password must not contain whitespaces"}
        })
    }

    if(!emailValidator.validate(req.body.email)){
        return res.status(400).send({
            error: {message: "Invalid email format"}
        })
    }

    UsersModel.find({email: req.body.email}).then(user => {
        if(user.length >= 1){
            return res.status(409).send({
                error: {message: 'There is already an user with the email ' + req.body.email}
            })
        } else{
            bcrypt.hash(req.body.password, 10, (error, hash) => {
                if(error){
                    return res.status(500).json({error: error})
                } else{
                    const userObject = {
                        _id: mongoose.Types.ObjectId(), 
                        /*  I am generating _id manually so i can use it on the 
                            verification URL
                        */
                        email: req.body.email,
                        password: hash
                    }
                    
                    const verification_token = randCrypto({length: 128, type: 'url-safe'})

                    mail.sendMail({
                        from: 'Project 02 <' + secrets.mail_user + '>',
                        to: req.body.email,
                        subject: 'Account Activation',
                        html: `
                        <h2>Link to activate your account: <br />
                            <a href='http://localhost:8083/users/activate/${userObject._id}/${verification_token}'>
                                localhost:8083/users/activate/${userObject._id}/${verification_token}
                            </a>
                        </h2>`
                    }).then(sent => {
                        if(!sent){
                            return res.status(500).send({error: {message:"Unsuccessful signup"}})
                        }
                    }).catch(error=>{
                        return res.status(500).send({error: {message:"Unsuccessful signup"}})
                    })

                    userObject.verification_token = verification_token
                    userObject.verified = false

                    const expiration = new Date()
                    expiration.setDate(expiration.getDate() + 1)
                    
                    userObject.verification_expiration = expiration

                    user = new UsersModel(userObject)

                    user.save().then(userCreated => {
                        res.status(201).json({
                            message: 'User successfully created!',
                            createdUser: {
                                method: 'GET',
                                url: 'http://localhost:8083/users/?id=' + userCreated._id
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