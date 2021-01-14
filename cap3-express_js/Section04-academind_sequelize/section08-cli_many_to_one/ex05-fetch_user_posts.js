/* 
    We'll now make get user by id bring the posts of the user
*/

/* On user controller */

// GET BY UUID
exports.getByUuid = (req, res, next) => {
    const {uuid} = req.params

    User.findOne({where: {uuid: uuid}, include: [{model: Post, as: 'posts'}] }) // Only change
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

