const express = require('express')
const app = express()
const morgan  = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const content_security_policy = require('./security/security_policy')

app.use(content_security_policy.csp);
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

const secrets = require('./secrets/secrets')
mongoose.connect(`mongodb+srv://marcola:${secrets.password}@cluster0.p4xhv.mongodb.net/${secrets.db}?retryWrites=true&w=majority`, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false
}, () => {
    console.log('Connected to database.')
})

const productRoute = require('./routes/product_route')
const userRoute = require('./routes/user_route')

app.use('/users', userRoute)
app.use('/products', productRoute)

module.exports = app