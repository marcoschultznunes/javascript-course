const PostModel = require('../models/posts_model')

const { validationResult } = require('express-validator')

exports.getPosts = (req, res, next) => {
    PostModel.find()
    .select('-__v')
    .then(posts => {
        return res.status(200).json({
            message: 'Successfully fetched posts!',
            posts: posts
        })
    })
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    })
}

exports.createPost = (req, res, next) => {
    if(!req.file){
        const err = new Error('Validation failed. No image provided.')
        err.statusCode = 422
        next(err)
    }

    const {title, content, creator} = req.body
    const imageUrl = req.file.path
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Entered data is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()
        next(err)
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
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    })
}

