const path = require('path')
const fs = require('fs')

const deleteImage = (imageUrl) => {
    const imagePath = path.join(__dirname, '..', '..', imageUrl)
    
    let result = true

    fs.unlink(imagePath, (err) => {
        result = true
    })

    return result
}

exports.deleteImage = deleteImage