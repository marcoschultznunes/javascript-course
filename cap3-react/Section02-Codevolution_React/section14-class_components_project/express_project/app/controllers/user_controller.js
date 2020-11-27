const mongoose = require('mongoose')

require('../models/user_model')
const UserModel = mongoose.model('users')

exports.getUserIndex = (req, res) => {
    UserModel.find()
    .select('-__v') // Excludes the internal field __v from the response
    .then(users => {
        responseObject = {
            numOfusers: users.length,
            users: users.map(user => {
                return {
                    _id: user._id,
                    name: user.name,
                    surname: user.surname,
                    role: user.role,
                    password: user.password,
                    request:{
                        method: 'GET',
                        url: 'http://localhost:8083/users/' + user._id
                    }
                }
            })
        }

        res.json(responseObject)
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
}

exports.getUser = (req, res) => {
    const id = req.params.id

    UserModel.findById(id)
    .select('-__v') // Excludes the internal field __v from the response
    .then(user => {
        if(user){
            res.json(user)
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
}

exports.postUser = (req, res) => {
    if(req.body.name.length < 3){
        return res.status(400).send('Not enough characters in name field')
    }
    if(req.body.surname.length < 3){
        return res.status(400).send('Not enough characters in surname field')
    }
    if(req.body.password.length < 8){
        return res.status(400).send('Not enough characters in password field (minimum 8)')
    }

    const userObject = {
        name: req.body.name,
        surname: req.body.surname,
        role: req.body.role,
        password: req.body.password
    }

    const user = new UserModel(userObject)

    user.save().then(userCreated => {
        responseObject = {
            message: 'User successfully created',
            createduser: {
                method: 'GET',
                url: 'http://localhost:8083/users/' + userCreated._id
            }
        }

        res.status(201).json(responseObject)
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
}

exports.patchUser = (req, res) => {
    const id = req.params.id
    
    UserModel.findOneAndUpdate({_id: id}, req.body).then(user => {
        if(user){
            res.status(200).send({message: 'Successfully updated user!'})
        } else{
            res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
}

exports.deleteUser = (req, res) => {
    const id = req.params.id

    UserModel.findOneAndDelete({_id: id}).then(user => {
        if(user){
            return res.status(200).send({message: 'User deleted!'})
        } else{
            return res.sendStatus(404)
        }
    }).catch(error => {
        res.status(400).send({error: {message: error.message}})
    })
}