/* On post controller */

// INDEX
exports.fetchPosts = (req, res, next) => {
    
    // Just add them to the include option
    Post.findAll({ include: [
        {model: User, as: 'user'}, 
        {model: Tag, as: 'tags', through: {attributes: []}} 
    ] })
    .then(posts => {
        return res.status(200).json({
            message: 'Successfully fetched posts!',
            posts: posts
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: err.message
        })
    })
}
