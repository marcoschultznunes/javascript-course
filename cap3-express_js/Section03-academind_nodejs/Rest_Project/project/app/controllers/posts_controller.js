const PostModel = require('../models/posts_model')

const { validationResult } = require('express-validator')
const { deleteImage } = require('../utils/image_functions')
const { uploadImage } = require('../config/imageUpload')

// FETCH ALL
exports.getPosts = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Query is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()
        throw err
    }

    const filter = req.query.userId ? {'creator': req.query.userId} : {}

    const page = Number(req.query.page) || 1
    const perPage = Number(req.query.perPage) || 2
    let totalPosts = 0

    PostModel.find()
    .countDocuments()
    .then(count => {
        totalPosts = count

        return PostModel.find(filter)
            .skip((page - 1) * perPage)
            .limit(perPage)
            .select('-__v')
            .sort({createdAt: -1})
            .populate('creator', '_id name')
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

// GET BY ID
exports.getPostById = (req, res, next) => {
    const id = req.params.id

    PostModel.findById(id)
        .select('-__v')
        .populate('creator', '_id name')
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

// POST
exports.createPost = (req, res, next) => {
    if(!req.file){
        const err = new Error('Validation failed. No image provided.')
        err.statusCode = 422
        throw err
    }

    const userId = req.userId
    const {title, content} = req.body
    const imageUrl = req.file.path

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Entered data is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()

        if(req.file){
            deleteImage(req.file.path)
        }

        throw err
    }

    const post = new PostModel({
        title: title,
        content: content,
        imageUrl: imageUrl,
        creator: userId
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
        if(req.file){
            deleteImage(req.file.path)
        }
        next(err)
    })
}

// PATCH
exports.patchPost = (req, res, next) => {
    const id = req.params.id

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Entered data is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()

        if(req.file){
            deleteImage(req.file.path) // Here too, because the catch does not cover it
        }
        throw err
    }

    const updatedPost = {}

    PostModel.findById(id)
        .then(post => {
            if(!post){
                const err = new Error('No post found with given ID.')
                err.statusCode = 404
                throw err
            }

            if(post.creator.toString() !== req.userId){
                const err = new Error('Not authorized.')
                err.statusCode = 403
                throw err
            }

            let imageUrl = false
            let success = true

            if(req.file){
                imageUrl = req.file.path
                success = deleteImage(post.imageUrl)
            }
            if(!success){
                const err = new Error('An error has occurred while deleting post image. Please, try again. If failure persists, contact support.')
                throw err
            }

            const {title, content} = req.body 

            const updateObject = {
                title: title || post.title,
                content: content || post.content,
                imageUrl: imageUrl || post.imageUrl
            }

            updatedPost.title = updateObject.title
            updatedPost.content = updateObject.content
            updatedPost.imageUrl = updateObject.imageUrl

            return PostModel.findOneAndUpdate({_id: id}, {
                ...updateObject,
            })
        })
        .then(() => {
            return res.status(200).json({
                message: 'Successfully updated post.',
                post: updatedPost
            })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500
            }

            /* Does this add a security flaw? No, because the file path generated by multer
            will add the timestamp at the beginning, guaranteeing it to be different from 
            any other file. */
            if(req.file){
                deleteImage(req.file.path) // Important, otherwise multer still uploads
            }

            return next(err)
        })
}

// DELETE
exports.deleteById = (req, res, next) => {
    const id = req.params.id

    PostModel.findById(id)
        .then(post => {
            if(!post){
                const err = new Error('No post found with given ID.')
                err.statusCode = 404
                throw err
            }

            if(post.creator.toString() !== req.userId){
                const err = new Error('Not authorized.')
                err.statusCode = 403
                throw err
            }

            const success = deleteImage(post.imageUrl)

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
