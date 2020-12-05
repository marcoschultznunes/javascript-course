const express = require('express')
const app = express()

const mongoose = require('mongoose')
const secrets = require('./secrets/secrets')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});

const postsRouter = require('./routes/posts_routes')

mongoose.connect(`mongodb+srv://marcola:${secrets.password}@cluster0.p4xhv.mongodb.net/${secrets.db}?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
})
.then(() => {
    console.log('Connected to database!')

    app.use('/posts', postsRouter)
})
.catch(e => {
    console.log('Could not connect to database. ' + e)
})
    
module.exports = app