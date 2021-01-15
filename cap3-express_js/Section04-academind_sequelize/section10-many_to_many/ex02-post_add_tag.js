/* 
    Now we'll add a controller to create tags, then we'll modify the create post to add tags
*/
exports.createTag = (req, res, next) => {
    const {name} = req.body

    Tag.create({name: name})
    .then(tag => {
        return res.status(201).json({
            message: 'Tag successfully created!',
            tag: tag
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: 'Could not create tag.'
        })
    })
}

/* post controller create */

// POST
exports.createPost = (req, res, next) => {
    const {title, body, userUuid, tags} = req.body

    User.findOne({where: {uuid: userUuid} }).then(user => {
        if(!user){
            return res.status(404).json({
                message: 'No user found with given user UUID.'
            })
        }

        return Post.create({
            title: title,
            body: body,
            userId: user.id
        })
    })
    .then(post => {
        if(tags.length > 0){ // setTags
            post.setTags(tags)
        }

        return post.save()
    })
    .then(createdPost => {
        return res.status(201).json({
            message: 'Successfully created post!',
            post: createdPost
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: 'Could not create post.'
        })
    })
}
