/* user_model.js */
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


/* auth_routes.js */
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Auth route.')
})
router.post('/signup', (req, res) => {
    res.send('Signup route.')
})

module.exports = router


/* On app.js */
const authRouter = require('./routes/auth_routes')
app.use('/auth', authRouter)
