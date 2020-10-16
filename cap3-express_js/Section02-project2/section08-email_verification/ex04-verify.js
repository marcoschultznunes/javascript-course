router.get('/activate/:id/:token', (req, res, next) => {
    const id = req.params.id
    const token = req.params.token

    UsersModel.findOne({_id: id}).then(user => {
        if(user.verified){
            return res.status(400).send({error: {message: 'User already verified'}})
        }

        const now = new Date()
        const expiration = new Date(user.verification_expiration)

        if(expiration.getTime() < now.getTime()){
            return res.status(401).send({error: {message: 'Verification expired'}})
        }

        if(!user.verified){
            user.verified = true
            user.verification_token = null
            user.verification_expiration = null

            user.save().then(success => {
                if(success){
                    return res.status(200).send('Successfully verified and activated user account')
                }
            }).catch()
        } else{
            return res.status(400).send({error: {message: 'Could not verify'}})
        }
    }).catch(error => {
        return res.status(400).send({error: {message: 'Could not verify'}})
    })
})