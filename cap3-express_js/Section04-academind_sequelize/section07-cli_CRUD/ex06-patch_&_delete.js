/* On user model */

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

/* On user routes */
router.patch('/:uuid', userController.updateUser)
router.delete('/:uuid', userController.deleteUser)
