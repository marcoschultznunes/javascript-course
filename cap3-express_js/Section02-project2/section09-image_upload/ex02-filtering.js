/*
    We can add filters to our upload middleware, for instance to block files over a certain 
    size limit and to accept only files with image extensions
*/

// Custom, reusable filter
const imageFilter = (req, file, callback) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        callback(null, true)
    }
    else{
        callback(new Error('File type not allowed. Only .jpeg and .png are allowed.'), false)
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10 // 10 MegaBytes limit
    },
    fileFilter: imageFilter // Adding the image filter
})