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

const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')

app.use('/categories', categoryRoutes)
app.use('/products', productRoutes)

sequelize.sync().then(result => {
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
