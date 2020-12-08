/*
    https://expressjs.com/en/guide/error-handling.html

    There is a special type of middleware in express which is called error handling middleware.
This middleware uses 4 params instead of 3 (error, req, res, next). 


    In asynchronous code(promises and callbacks), it is called when we pass an error through a 
next(error) function;

    In synchronous code, we can simply throw an error and it will be handled by the error 
handler middleware.
    

    If there is more than one error handling middleware, they will execute from top to bottom.
*/


/* On posts_controller.js */
exports.getPosts = (req, res, next) => {
    PostModel.find()
    .select('-__v')
    .then(posts => {
        return res.status(200).json({
            message: 'Successfully fetched posts!',
            posts: posts
        })
    })
    .catch(err => { // All catch are now sent by next(err)
        if(!err.statusCode){
            err.statusCode = 500 // If no status code, set it to 500
        }
        next(err)
    })
}

exports.createPost = (req, res, next) => {
    const {title, content, imageUrl, creator} = req.body
    const errors = validationResult(req)

    if(!errors.isEmpty()){ // Validation errors
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
    .catch(err => { // Another catch
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    })
}


/* On app.js, the error handling middleware. */
app.use((error, req, res, next) => {
    const status = error.statusCode || 500
    const message = error.message

    const finalError = {
        message: message
    }
    if(error.errors){ // This field exists for validation errors
        finalError.errors = error.errors
    }

    res.status(status).json(finalError)
})