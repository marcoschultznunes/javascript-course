/* On posts_routes.js */
router.get('/:id', postController.getPostById)

/* On posts_controller.js */
exports.getPostById = (req, res, next) => {
    const id = req.params.id

    PostModel.findById(id)
        .select('-__v')
        .then(post => {
            if(!post){
                const err = new Error('No post found with given ID.')
                err.statusCode = 404
                throw err // Important: throw err or RETURN next(err)
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
