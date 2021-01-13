/* user controller */
const {User} = require('../models')

// INDEX
exports.fetchUsers = (req, res, next) => {
    User.findAll()
    .then(users => {
        res.status(200).json({
            message: 'Successfully fetched users!',
            users: users
        })
    })
    .catch(err => {
        res.status(500).json({
            message: 'Could not fetch users.'
        })
    })
}

// POST
exports.postUser = (req, res, next) => {
    const {name, surname, email, password} = req.body

    User.create({
        name: name, 
        surname: surname, 
        email: email, 
        password: password
    })
    .then(newUser => {
        res.status(201).json({
            message: 'User created!',
            user: newUser
        })
    })
    .catch(err => {
        res.status(500).json({
            message: 'Could not create user.'
        })
    })
}

/* user routes */
const router = require('express').Router()

const userController = require('../controllers/user')

router.get('/', userController.fetchUsers)
router.post('/', userController.postUser)

module.exports = router

/* On app.js */
const userRoutes = require('./routes/user')

app.use('/users', userRoutes)
