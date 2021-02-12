const mongoose = require('mongoose')
const {Schema} = mongoose

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true // Unique
    }
}, 
    {timestamps: false, toJSON: { versionKey: false }} // Ignore __v field
)

module.exports = mongoose.model('Categories', categorySchema)
