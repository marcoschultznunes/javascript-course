const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Unverified'
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Posts' // The mongoose model name, not the DB collection
        }
    ]
})

module.exports = mongoose.model('Users', userSchema)
