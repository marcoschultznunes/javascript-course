exports.getPosts = (req, res, next) => {
    // Validation
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Query is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()
        throw err
    }

    // Url query params => http://localhost:8083/posts?page=1&perPage=4
    const page = Number(req.query.page) || 1
    const perPage = Number(req.query.perPage) || 2
    let totalPosts = 0

    PostModel.find()
    .countDocuments()
    .then(count => {
        totalPosts = count

        return PostModel.find()
            .skip((page - 1) * perPage) // For instance: page 2, perPage 4 => skip 4
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

/* I've also added validation for the query params on post_validators.js */
const { body, query } = require('express-validator')

exports.getPostsValidation = [
    query('page')
        .optional()
        .isInt({min: 1})
        .withMessage('Post page must be a positive integer number.'),
    query('perPage')
        .optional()
        .isInt({min: 1, max: 100})
        .withMessage('Posts per page must be an integer number in the range of 1-100.')
]

/* On posts_routes.js */
router.get('/', postValidators.getPostsValidation, postController.getPosts)
