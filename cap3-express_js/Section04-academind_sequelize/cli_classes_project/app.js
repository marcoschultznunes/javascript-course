const express = require('express')
let app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const {sequelize} = require('./models')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});

const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
const tagRoutes = require('./routes/tag')

app.use('/users', userRoutes)
app.use('/posts', postRoutes)
app.use('/tags', tagRoutes)

sequelize.sync().then(result => {
    app.use((req, res, next) => {
        res.send('<h1>It just works!</h1>')
    })
}).catch(err => {
    console.log(err)
    app = null
})

module.exports = app

