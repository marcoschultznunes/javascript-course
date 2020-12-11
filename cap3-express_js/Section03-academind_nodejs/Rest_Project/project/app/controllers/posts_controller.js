const PostModel = require('../models/posts_model')

const { validationResult } = require('express-validator')
const { deleteImage } = require('../utils/image_functions')

exports.getPosts = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Query is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()
        throw err
    }

    const page = Number(req.query.page) || 1
    const perPage = Number(req.query.perPage) || 2
    let totalPosts = 0

    PostModel.find()
    .countDocuments()
    .then(count => {
        totalPosts = count

        return PostModel.find()
            .skip((page - 1) * perPage)
            .limit(perPage)
            .select('-__v')
    })
    .then(posts => {
        return res.status(200).json({
            message: 'Successfully fetched posts!',
            totalPosts: totalPosts,
            page: page,
            perPage: perPage,
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

exports.getPostById = (req, res, next) => {
    const id = req.params.id

    PostModel.findById(id)
        .select('-__v')
        .then(post => {
            if(!post){
                const err = new Error('No post found with given ID.')
                err.statusCode = 404
                throw err
            }

            return res.status(200).json({
                message: 'Successfully fetched post!',
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

exports.createPost = (req, res, next) => {
    if(!req.file){
        const err = new Error('Validation failed. No image provided.')
        err.statusCode = 422
        throw err
    }

    const {title, content, creator} = req.body
    const imageUrl = req.file.path

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Entered data is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()
        throw err
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

exports.deleteById = (req, res, next) => {
    const id = req.params.id

    PostModel.findById(id)
        .then(post => {
            if(!post){
                const err = new Error('No post found with given ID.')
                err.statusCode = 404
                throw err
            }

            // TODO check if the logged in user is the creator of the post

            const success = deleteImage(post.imageUrl, next)

            if(!success){
                const err = new Error('An error has occurred while deleting post image. Please, try again. If failure persists, contact support.')
                throw err
            }

            return PostModel.findByIdAndDelete(id)
        })
        .then(() => {
            res.status(200).json({
                message: 'Successfully deleted post.'
            })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500
            }
            next(err)
        })
}
