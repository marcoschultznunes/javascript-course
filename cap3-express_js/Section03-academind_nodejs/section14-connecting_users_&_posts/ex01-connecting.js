/* 
    I have removed the posts attribute from users, the creator will be defined on the post,
there is no need for them to both reference each other. 
*/

/* On posts_model.js */
const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    content:{
        type: String, 
        required: true
    },
    creator:{ // creator now references the User ID
        type: Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
}, 
    {timestamps: true}
)


/* post_controller.js's createPost */
exports.createPost = (req, res, next) => {
    if(!req.file){
        const err = new Error('Validation failed. No image provided.')
        err.statusCode = 422
        throw err
    }

    const {userId} = req // We now use the userId passed by the authorization middleware
    const {title, content} = req.body
    const imageUrl = req.file.path

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

    const post = new PostModel({
        title: title,
        content: content,
        imageUrl: imageUrl,
        creator: userId // We use the userId here.
    })

    post.save()
    .then((post) => {
        return res.status(201).json({
            message: 'Post successfully created!',
            post: post
        })
    })
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 500
        }
        if(req.file){
            deleteImage(req.file.path)
        }
        next(err)
    })
}