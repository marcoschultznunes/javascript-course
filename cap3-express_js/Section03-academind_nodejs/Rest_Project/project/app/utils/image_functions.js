const path = require('path')
const fs = require('fs')

exports.deleteImage = (imageUrl) => {
    const imagePath = path.join(__dirname, '..', '..', imageUrl)
    
    fs.unlink(imagePath, (err) => {
        if(err){
            return false
        }
        
        return true
    })
}