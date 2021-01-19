const express = require('express')
let app = express()

const path = require('path')
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

app.use('/images', express.static(path.join(__dirname, 'images')))

const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const brandRoutes = require('./routes/brand')
const productRoutes = require('./routes/product')

app.use('/auth', userRoutes)
app.use('/categories', categoryRoutes)
app.use('/brands', brandRoutes)
app.use('/products', productRoutes)

sequelize.sync().then(result => {
    console.log('Connected to database!')

    app.use((error, req, res, next) => {
        const status = error.statusCode || 500
        const message = error.message || 'An error has ocurred.'
    
        const finalError = {
            message: message
        }
        if(error.errors){
            finalError.errors = error.errors
        }

        return res.status(status).json(finalError)
    })
}).catch(err => {
    console.log(err)
    app = null
})

module.exports = app
