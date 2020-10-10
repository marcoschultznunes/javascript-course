const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
require('./model')
const UsersModel = mongoose.model('users')

const bcrypt = require('bcrypt')
const emailValidator = require('email-validator')
const jwt = require('jsonwebtoken')

router.get('/', (req, res, next) => {
    res.send('Welcome to the Users service!')
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

module.exports = router