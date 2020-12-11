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