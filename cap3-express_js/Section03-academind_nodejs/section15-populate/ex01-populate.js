/* Fetch All */
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
            .populate('creator', '_id name') // Fetches the user's _id and name atributes
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

/* Get by ID */
exports.getPostById = (req, res, next) => {
    const id = req.params.id

    PostModel.findById(id)
        .select('-__v')
        .populate('creator', '_id name') // Fetches the user's _id and name atributes
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
