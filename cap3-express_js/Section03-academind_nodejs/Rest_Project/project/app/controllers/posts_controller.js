const PostModel = require('../models/posts_model')

const { validationResult } = require('express-validator')

exports.getPosts = (req, res) => {
    PostModel.find()
    .select('-__v')
    .then(posts => {
        return res.status(200).json({
            message: 'Successfully fetched posts!',
            posts: posts
        })
    })
    .catch(e => {
        return res.status(500).json({
            error: {
                message: 'Could not fetch posts.'
            }
        })
    })
}

exports.createPost = (req, res) => {
    const {title, content, imageUrl, creator} = req.body
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()})
    }

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
        return res.status(500).json({
            error: {
                message: 'Could not create post.'
            }
        })
    })
}

