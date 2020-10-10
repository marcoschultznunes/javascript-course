// The users model file
const mongoose = require('mongoose')

mongoose.model('users', {
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, 'users')

// The routes file
const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
require('./model')
const UsersModel = mongoose.model('users')

router.get('/', (req, res, next) => {
    res.send('Welcome to the Users service!')
})

module.exports = router

// Lastly, we must add it the users router to app.js 
const userRoutes = require('./model/users/routes')
app.use('/users', userRoutes)

/* 
    We will use the npm package 'bcrypt' to encrypt the passwords.
    https://www.npmjs.com/package/bcrypt

    npm install --save bcrypt
*/

// On the routes.js of users
const bcrypt = require('bcrypt')