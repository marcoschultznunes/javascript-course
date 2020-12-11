/* 
    First, we'll make an image_functions.js file, on an utils folder. This file will have a 
delete image function that accepts the path as a parameter
*/

/* image_functions.js */
const path = require('path')
const fs = require('fs')

exports.deleteImage = (imageUrl, next) => {
    const imagePath = path.join(__dirname, '..', '..', imageUrl)
    
    fs.unlink(imagePath, (err) => {
        if(err){
            return false
        }

        return true
    })
}

/* On posts_controller.js */
exports.deleteById = (req, res, next) => {
    const id = req.params.id

    PostModel.findById(id)
        .then(post => {
            if(!post){
                const err = new Error('No post found with given ID.')
                err.statusCode = 404
                throw err
            }

            // TODO check if the logged in user is the creator of the post

            const success = deleteImage(post.imageUrl, next)

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

/* 
    In this example we made it so that if there is a failure in deleting the image, the post is
not deleted, and the user must contact support to help him, as the image is public on the static
folder. This is not the required approach, the post could be deleted even if the image is not, 
but with new data protection laws, i am not sure if that is the best approach.
*/
