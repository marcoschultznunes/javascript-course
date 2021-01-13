/* On user controller */

// GET BY UUID
exports.getByUuid = (req, res, next) => {
    const {uuid} = req.params

    User.findOne({where: {uuid: uuid} }) // We'll need to query for the UUID
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

/* On user routes */
router.get('/:uuid', userController.getByUuid)
