const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
require('./model')
const UsersModel = mongoose.model('users')

const bcrypt = require('bcrypt')
const emailValidator = require('email-validator')
const jwt = require('jsonwebtoken')
const mail = require('../../emails/emailconfig')
const secrets = require('../../secrets/secrets')
const randCrypto = require('crypto-random-string')

router.get('/', (req, res, next) => {
    res.send('Welcome to the Users service!')
})
router.post('/testemail', (req, res, next) => {
    mail.sendMail({
        from: 'Project 02 <' + secrets.mail_user + '>',
        to: 'oantedeguemon@gmail.com',
        subject: 'Testing Node Email',
        html: "<h1>Hello There</h1>"
    }).then(success => {
        if(success){
            res.status(200).send('Email sent')
        } else{
            res.status(500).send({error: {message: 'Could not send the email'}})
        }
    }).catch(error => {
        res.status(500).send({error: {message: error.message}})
    })
})

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

router.post('/login', (req, res, next) => {
    UsersModel.findOne({email: req.body.email}).then(user => {
        if(user.length < 1){
            return res.status(401).send({error: {message: 'Authentication failed'}})
        } else{
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
            user.deleteOne().catch(error => {
                return res.status(500).send('Verification failed')
            })

            return res.status(401).send({error: {message: 'Verification expired. Try signing up again.'}})
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

module.exports = router