/*
    First we'll create the posts model, using mongoose's Schema class
*/
const mongoose = require('mongoose')
const {Schema} = mongoose

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    content:{
        type: String, 
        required: true
    },
    creator:{
        type: Object,
        required: true
    },
}, 
    {timestamps: true} // This will generate a createdAt and an updatedAt Date field 
)

module.exports = mongoose.model('Posts', postSchema)


/* post_routes.js */
const express = require('express')
const router = express.Router()

const postController = require('../controllers/posts_controller')

router.get('/', postController.getPosts)
router.post('/', postController.createPost)

module.exports = router


/* On app.js, inside the mongoose connection's .then */
app.use('/posts', postsRouter)


/* posts_controller.js */
const PostModel = require('../models/posts_model')

exports.getPosts = (req, res) => {
    res.send('<h1>Posts</h1>')
}

exports.createPost = (req, res) => {
    const {title, content, imageUrl, creator} = req.body

    const post = new PostModel({
        title: title,
        content: content,
        imageUrl: imageUrl,
        creator: creator
    })

    post.save()
    .then((post) => {
        return res.status(201).json({
            message: 'Post successfully created!',
            post: post
        })
    })
    .catch((e) => {
        return res.status(400).json({
            error: {
                message: 'Could not create post.'
            }
        })
    })
}