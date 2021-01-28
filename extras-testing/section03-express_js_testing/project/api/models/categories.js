const mongoose = require('mongoose')
const {Schema} = mongoose

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, 
    {timestamps: false, toJSON: { versionKey: false }} // Ignore __v field
)

module.exports = mongoose.model('Categories', categorySchema)
