const express = require('express') 
const app = express()

const path = require('path')
const bodyParser = require('body-parser')

const view = require('./utils/paths/view')

const productRoutes = require('./routes/product_routes')
const indexRoutes = require('./routes/index_routes')

const notFound = require('./controllers/errors/not_found')

app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(
    path.join(__dirname, 'public')
))

app.set('view engine', 'ejs')
app.set('views', 'app/views')

app.use('/products', productRoutes)
app.use('/', indexRoutes)

app.use(notFound.getNotFoundPage)

module.exports = app