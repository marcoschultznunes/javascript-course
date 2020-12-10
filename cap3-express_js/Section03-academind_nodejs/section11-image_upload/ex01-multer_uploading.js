/*
    In this section, we'll store the post image file on an images folder on the backend. For 
this, we'll use multer.

    npm install --save multer
*/


/* First we'll configure the storage on a separate imageUpload.js file */
const multer = require('multer')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'app/images') // The destination folder
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname) // File names
    },
})

const imageFilter = (req, file, cb) => {
    if(
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg' 
    ){
        cb(null, true)
    } 
    else{
        const err = new Error('Validation error. Accepted image extensions are: .png, .jpg and .jpeg')
        err.statusCode = 422
        
        cb(err, false)
    }
}

exports.uploadImage = multer({
    storage: fileStorage,
    limits: {
        fileSize: 1024 * 1024 * 10 // 10 MegaBytes limit
    },
    fileFilter: imageFilter
})


/* To use it, we'll add it as middleware to our create post route */
router.post('/', 
    uploadImage.single('image'), postValidators.createValidation, postController.createPost
)
/*
    We must now submit a multipart form with a field named image containing the image. Also,
creator value will be bugged for now, as it is JSON while the user model is not yet implemented,
and JSON is not part of a multipart form, later it will be turned into an ObjectID, which means
a string representing the id of the object will be passed.
*/

/* Changes on createPost */
exports.createPost = (req, res, next) => {

    if(!req.file){ // If file does not exist, validation error
        const err = new Error('Validation failed. No image provided.')
        err.statusCode = 422
        next(err)
    }

    const {title, content, creator} = req.body
    const imageUrl = req.file.path // imageUrl is now extracted from request.file.path
    
    const errors = validationResult(req)

    if(!errors.isEmpty()){
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
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    })
}

