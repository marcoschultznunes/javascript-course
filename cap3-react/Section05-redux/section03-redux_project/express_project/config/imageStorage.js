const multer = require('multer')

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname)
    }
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
        fileSize: 1024 * 1024 * 5 // 5 MegaBytes limit
    },
    fileFilter: imageFilter
})
