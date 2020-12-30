const UserModel = require('../models/user_model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const { oneHour } = require('../utils/cookies')

exports.signup = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Query is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()
        throw err
    }

    const { email, password, name } = req.body

    bcrypt.hash(password, 12)
        .then(hashedPassword => {
            const user = new UserModel({
                email: email,
                password: hashedPassword,
                name: name
            })

            return user.save()
        })
        .then(newUser => {
            return res.status(201).json({
                message: 'User successfully created!',
                user: newUser
            })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500
            }
            next(err)
        })
}

exports.login = (req, res, next) => {
    const {email, password} = req.body
    let fetchedUser = null

    UserModel.findOne({email: email})
        .then(user => {
            if(!user){
                const err = new Error('Email or password is incorrect.')
                err.statusCode = 401
                throw err
            }
            
            fetchedUser = user

            return bcrypt.compare(password, user.password)
        })
        .then(matchingPasswords => {
            if(!matchingPasswords){
                const err = new Error('Email or password is incorrect.')
                err.statusCode = 401
                throw err
            }

            const token = jwt.sign({
                email: fetchedUser.email,
                userId: fetchedUser._id
            }, 'secretkeyHAHAHAlol', {
                expiresIn: '1h'
            }) 

            res.status(200).cookie('userJwt', token, {
                sameSite: 'Strict', 
                path: '/', 
                expires: oneHour,
                httpOnly: true,
                overwrite: true
            }).json({
                userId: fetchedUser._id.toString(),
                userName: fetchedUser.name
            })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500
            }
            next(err)
        })
}

exports.getJwtCookie = (req, res, next) => {
    res.send(req.cookies.userJwt)
}

exports.clearJwtCookie = (req, res, next) => {
    res.cookie('userJwt', 'expired' , {
        expiresIn: new Date(0),
        overwrite: true
    }).send('Cookie cleared')
}