/* The getPosts function in posts_controller.js */
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

/*
    We now have a route for getting all the posts and a route for creating posts. We need to 
improve their error handling and implement validation to the POST route with express validator.
    Then, we need to add file storage and make the server image folder static.
*/