/* 
    https://www.npmjs.com/package/jsonwebtoken

    Install JWT library:
        npm install jsonwebtoken
*/

// Require jwt
const jwt = require('jsonwebtoken')

// The login
router.post('/login', (req, res, next) => {
    UsersModel.findOne({email: req.body.email}).then(user => {
        if(user.length < 1){
            res.status(401).send({error: {message: 'Authentication failed'}})
        } else{
            bcrypt.compare(req.body.password, user.password, (error, success) => {
                if(error){
                    return res.status(401).send({error: {message: 'Authentication failed'}})
                }
                if(success){
                    const token = jwt.sign({ // jwt.sign to create the token
                        email: user.email,      // These two lines are
                        _id: user._id           // The token's payload
                    }, 'tawLsn3E4mboqp#fb9J', // This is the secret key for the server
                    { // Options
                        expiresIn: '1h' 
                    })
                    return res.status(200).send({
                        message: 'Successful authentication',
                        token: token // Sends the token
                    })
                }

                return res.status(401).send({error: {message: 'Authentication failed'}})
            })
        }
    }).catch(error => {
        res.status(401).send({error: {message: 'Authentication failed'}})
    })
})