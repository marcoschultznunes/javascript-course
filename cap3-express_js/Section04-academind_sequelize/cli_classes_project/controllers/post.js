const {Post, User} = require('../models')

// INDEX
exports.fetchPosts = (req, res, next) => {
    Post.findAll({ include: [{model: User, as: 'user'}] }).then(posts => {
        return res.status(200).json({
            message: 'Successfully fetched posts!',
            posts: posts
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: err.message
        })
    })
}

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

// DELETE
exports.deletePost = (req, res, next) => {
    const {uuid} = req.params

    Post.findOne({where: {uuid: uuid} })
    .then(post => {
        if(!post){
            return res.status(404).json({
                message: 'No post found with given UUID.'
            })
        }

        return post.destroy()
    })
    .then(() => {
        return res.status(200).json({
            message: 'Post successfully deleted!'
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: 'Could not delete post.'
        })
    })
}
