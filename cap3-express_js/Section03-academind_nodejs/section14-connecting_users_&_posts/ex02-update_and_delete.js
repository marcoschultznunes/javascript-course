/* Patch */
exports.patchPost = (req, res, next) => {
    const id = req.params.id

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

    PostModel.findById(id)
        .then(post => {
            if(!post){
                const err = new Error('No post found with given ID.')
                err.statusCode = 404
                throw err
            }

            if(post.creator.toString() !== req.userId){ // User = creator check
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

            // Changed so that the creator cannot be modified
            const updateObject = {
                title: title || post.title,
                content: content || post.content,
                imageUrl: imageUrl || post.imageUrl
            }

            return PostModel.findOneAndUpdate({_id: id}, {
                ...updateObject,
            })
        })
        .then(() => {
            return res.status(200).json({
                message: 'Successfully updated post.'
            })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500
            }
            if(req.file){
                deleteImage(req.file.path) 
            }

            return next(err)
        })
}


/* Delete */
exports.deleteById = (req, res, next) => {
    const id = req.params.id

    PostModel.findById(id)
        .then(post => {
            if(!post){
                const err = new Error('No post found with given ID.')
                err.statusCode = 404
                throw err
            }

            if(post.creator.toString() !== req.userId){ // User = creator check
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
