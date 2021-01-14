/* On post controller */

// POST
exports.createPost = (req, res, next) => {
    const {title, body, userUuid} = req.body

    User.findOne({where: {uuid: userUuid} }).then(user => {
        if(!user){
            return res.status(404).json({
                message: 'No user found with given user UUID.'
            })
        }

        return Post.create({
            title: title,
            body: body,
            userId: user.id
        })
    })
    .then(createdPost => {
        return res.status(201).json({
            message: 'Successfully created post!',
            post: createdPost
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: 'Could not create post.'
        })
    })
}

/* post router */
const router = require('express').Router()

const postController = require('../controllers/post')

router.post('/', postController.createPost)

module.exports = router

/* On app.js */
const postRoutes = require('./routes/post')

app.use('/posts', postRoutes)
