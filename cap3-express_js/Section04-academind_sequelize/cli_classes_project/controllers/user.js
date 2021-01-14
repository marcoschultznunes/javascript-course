const {User, Post} = require('../models')

// INDEX
exports.fetchUsers = (req, res, next) => {
    User.findAll()
    .then(users => {
        return res.status(200).json({
            message: 'Successfully fetched users!',
            users: users
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: 'Could not fetch users.'
        })
    })
}

// GET BY UUID
exports.getByUuid = (req, res, next) => {
    const {uuid} = req.params

    User.findOne({where: {uuid: uuid}, include: [{model: Post, as: 'posts'}] })
    .then(user => {
        if(!user){
            return res.status(404).json({
                message: 'No user found with given UUID.'
            })
        }

        return res.status(200).json({
            message: 'Successfully fetched user!',
            user: user
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: 'Could not fetch user.'
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
        return res.status(201).json({
            message: 'User created!',
            user: newUser
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: 'Could not create user.'
        })
    })
}

// PATCH
exports.updateUser = (req, res, next) => {
    const {uuid} = req.params
    const {name, surname, email, password} = req.body

    User.findOne({where: {uuid: uuid} })
    .then(user => {
        if(!user){
            return res.status(404).json({
                message: 'No user found with given UUID.'
            })
        }

        user.name = name || user.name
        user.surname = surname || user.surname
        user.email = email || user.email
        user.password = password || user.password

        return user.save()
    })
    .then(updatedUser => {
        return res.status(200).json({
            message: 'Successfully updated user!',
            user: updatedUser
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: 'Could not update user.'
        })
    })
}

// DELETE
exports.deleteUser = (req, res, next) => {
    const {uuid} = req.params

    User.findOne({where: {uuid: uuid} })
    .then(user => {
        if(!user){
            return res.status(404).json({
                message: 'No user found with given UUID.'
            })
        }

        return user.destroy()
    })
    .then(() => {
        return res.status(200).json({
            message: 'User successfully deleted!'
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: 'Could not delete user.'
        })
    })
}
