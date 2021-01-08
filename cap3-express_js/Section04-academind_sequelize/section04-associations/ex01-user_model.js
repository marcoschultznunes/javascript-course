/* user_model.js */
const Sequelize = require('sequelize')
const db = require('../connection')

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User

/* user_controller.js */
const UserModel = require('../models/user_model')

exports.userIndex = (req, res, next) => {
    UserModel.findAll().then(users => {
        res.status(200).json({
            message: 'Successfully fetched users!',
            users: users
        })
    }).catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not fetch users.'
        res.status(statusCode).json({message: errMessage})
    })
}
exports.getById = (req, res, next) => {
    const {id} = req.params

    UserModel.findByPk(id).then(user => {
        if(!user){
            const err = new Error('No user found with given ID!')
            err.statusCode = 404
            throw err
        }

        res.status(200).json({
            message: 'User successfully fetched!',
            user: user
        })
    }).catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not fetch user.'
        res.status(statusCode).json({message: errMessage})
    })
}

exports.createUser = (req, res, next) => {
    const {name, email, password} = req.body

    UserModel.create({
        name: name,
        email: email,
        password: password 
    }).then((createdUser) => {
        res.status(201).json({message: 'User created!', user: createdUser})
    }).catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not create user.'
        res.status(statusCode).json({message: errMessage})
    })
}
exports.deleteUser = (req, res, next) => {
    const {id} = req.params

    UserModel.findByPk(id).then(user => {
        if(!user){
            const err = new Error('No user found with given ID!')
            err.statusCode = 404
            throw err
        }

        return user.destroy()
    })
    .then(() => {
        res.status(200).json({message: 'User deleted!'})
    })
    .catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not delete user.'
        res.status(statusCode).json({message: errMessage})
    })
}
exports.updateUser = (req, res, next) => {
    const {id} = req.params
    const {name, email, password} = req.body


    UserModel.findByPk(id).then(user => {
        if(!user){
            const err = new Error('No user found with given ID!')
            err.statusCode = 404
            throw err
        }

        user.name = name || user.name
        user.email = email || user.email
        user.password = password || user.password

        return user.save()
    })
    .then((newUser) => {
        res.status(200).json({
            message: 'User successfully updated!',
            user: newUser
        })
    })
    .catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not update user.'
        res.status(statusCode).json({message: errMessage})
    })
}

/* user_routes.js */
const express = require('express')
const router = express.Router()

const user_controller = require('../controllers/user_controller')

router.get('/', user_controller.userIndex)
router.get('/:id', user_controller.getById)
router.post('/', user_controller.createUser)
router.patch('/:id', user_controller.updateUser)
router.delete('/:id', user_controller.deleteUser)

module.exports = router

/* On app.js */
const user_routes = require('./routes/user_routes')
app.use('/users', user_routes)

/* 
    Soon, we'll make the Users have Orders, and the orders have products
*/
