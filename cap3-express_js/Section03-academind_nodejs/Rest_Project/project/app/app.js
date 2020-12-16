const express = require('express')
const app = express()
const path = require('path')

const mongoose = require('mongoose')
const secrets = require('./secrets/secrets')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/app/images', express.static(path.join(__dirname, 'images')))

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});

const postsRouter = require('./routes/posts_routes')
const authRouter = require('./routes/auth_routes')

mongoose.connect(`mongodb+srv://marcola:${secrets.password}@cluster0.p4xhv.mongodb.net/${secrets.db}?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
})
.then(() => {
    console.log('Connected to database!')

    app.use('/posts', postsRouter)
    app.use('/auth', authRouter)

    app.use((error, req, res, next) => {
        const status = error.statusCode || 500
        const message = error.message
    
        const finalError = {
            message: message
        }
        if(error.errors){
            finalError.errors = error.errors
        }

        /*
        
        if(req.file){
            deleteImage(req.file.path) // Important, otherwise multer still uploads
        }

        It is a terrible idea to do this here, as this is a middleware through which any request
        can go. It is better to do this on the posts controller
        */

        return res.status(status).json(finalError)
    })    
})
.catch(e => {
    console.log('Could not connect to database. ' + e)
})

module.exports = app