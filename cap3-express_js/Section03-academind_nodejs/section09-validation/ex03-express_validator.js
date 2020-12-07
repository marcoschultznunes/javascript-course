/*
    npm install --save express-validator
*/

/* From requiring 'express-validator' you'll use a check() function to validate, and a 
validationResult variable */
const { check, validationResult } = require('express-validator')


/* On posts_routes.js */
const { check } = require('express-validator')

router.post('/', check('title').isString() , postController.createPost)


/* On posts_controller.js */
const { validationResult } = require('express-validator')

exports.createPost = (req, res) => {
    const {title, content, imageUrl, creator} = req.body
    const errors = validationResult(req) // Gets the errors from the check function

    if(!errors.isEmpty()){
        /* Returns the error response with each of the errors inside an array, and each error is
        an object with 4 attributs: value, msg, param and location */
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

/*
    The response of my request with title:{} was this:
        Status: 422 Unprocessable entity

        {
            "errors": [
                {
                    "value": {},
                    "msg": "Invalid value",
                    "param": "title",
                    "location": "body"
                }
            ]
        } 
*/