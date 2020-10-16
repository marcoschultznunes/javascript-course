router.post('/login', (req, res, next) => {
    UsersModel.findOne({email: req.body.email}).then(user => {
        if(user.length < 1){
            return res.status(401).send({error: {message: 'Authentication failed'}})
        } else{
            /*  This if is the change.
                If the user is not verified, login will not go through
            */
            if(user.verified == false){
                return res.status(401).send({
                    error: {message: 'User not verified yet. Check your email account.'}
                })
            }

            bcrypt.compare(req.body.password, user.password, (error, success) => {
                if(error){
                    return res.status(401).send({error: {message: 'Authentication failed'}})
                }
                if(success){
                    const token = jwt.sign({
                        email: user.email,
                        _id: user._id
                    }, 'tawLsn3E4mboqp#fb9J',
                    {
                        expiresIn: '1h'
                    })
                    return res.status(200).send({
                        message: 'Successful authentication',
                        token: token
                    })
                }

                return res.status(401).send({error: {message: 'Authentication failed'}})
            })
        }
    }).catch(error => {
        res.status(401).send({error: {message: 'Authentication failed'}})
    })
})