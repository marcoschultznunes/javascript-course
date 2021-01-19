const {User} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const moment = require('moment')

const transporter = require('../mail/transporter')
const verifyEmail = require('../mail/verifyEmail')

exports.getUsers = async (req, res, next) => {
    try{
        const users = await User.findAll()

        return res.status(200).json({
            message: 'Successfully fetched users!',
            users: users
        })

    } catch(err){
        next(err)
    }
}

exports.signUp = async (req, res, next) => {
    try{
        const {name, surname, email, password} = req.body

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12)
        

        // Generate and send verification token
        const verificationToken = crypto.randomBytes(16).toString('hex')

        const mailSent = await transporter.sendMail(verifyEmail(email, verificationToken))

        // Add verification expiry
        const verificationExpiresAt = new Date();
        verificationExpiresAt.setHours( verificationExpiresAt.getHours() + 1 );

        // Create user
        const newUser = await User.create({
            name, surname, email, password: hashedPassword, verificationToken, 
            verificationExpiresAt
        })


        // Response
        return res.status(201).json({
            message: 'Successful user sign up!',
            user: newUser
        })

    } catch(err){
        next(err)
    }
}

exports.login = async (req, res, next) => {
    try{
        const {email, password} = req.body

        // Find the user
        const user = await User.findOne({where: {email: email}})

        if(!user){
            const err = new Error('Email or password is incorrect.')
            err.statusCode = 401
            throw err
        }

        // Throw error if account is not verified
        if(!user.verifiedAt){
            const err = new Error('Account not verified. Check your email for the activation link.')
            err.statusCode = 401
            throw err
        }

        // Compare passwords
        const passwordsMatch = await bcrypt.compare(password, user.password)

        if(!passwordsMatch){
            const err = new Error('Email or password is incorrect.')
            err.statusCode = 401
            throw err
        }

        // Sign the JWT token
        const token = jwt.sign({
            email: user.email,
            userId: user.id,
            verifiedAt: user.verifiedAt
        }, 'secretkeyHAHAHAlol', {
            expiresIn: '1h'
        })

        // Send response
        return res.status(200).json({
            userId: user.id,
            userName: user.name,
            userSurname: user.surname,
            token: token
        })

    } catch(err){
        next(err)
    }
}

exports.verifyUser = async (req, res, next) => {
    try{
        const {email, token} = req.body

        const user = await User.findOne({where: {email: email}})

        // Fail if no user is found
        if(!user){
            const err = new Error('Failed to verify user. Wrong credentials.')
            err.statusCode = 401
            throw err
        }

        // Fail if user is already verified
        if(user.verifiedAt){
            const err = new Error('Failed to verify user. Wrong credentials.')
            err.statusCode = 401
            throw err
        }

        // Fail if verification tokens do not match
        if(token != user.verificationToken){
            const err = new Error('Failed to verify user. Wrong credentials.')
            err.statusCode = 401
            throw err
        }

        // Fail if verification is expired
        if(new Date().getTime() > moment(user.verificationExpiresAt)){
            await user.destroy()

            const err = new Error('Verification date expired. User deleted, please try signing up again!')
            err.statusCode = 401
            throw err
        }

        // Make user verified
        user.verificationExpiresAt = null
        user.verificationToken = null
        user.verifiedAt = new Date()

        const savedUser = await user.save()

        return res.status(200).json({
            message: 'User successfully verified!',
            user: savedUser
        })

    } catch(err){
        next(err)
    }
}

exports.deleteUser = async (req, res, next) => {
    try{
        const {id} = req.params

        const user = await User.findByPk(id)

        if(!user){
            const err = new Error('User not found.')
            err.statusCode = 404
            throw err
        }

        await user.destroy()

        return res.status(200).json({
            message: 'User deleted!'
        })

    } catch(err){
        next(err)
    }
}
