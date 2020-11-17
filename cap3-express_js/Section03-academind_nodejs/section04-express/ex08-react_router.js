/*
    The react router allows us to modularize our express application by separating each 
route from the app.js file
*/


/* products.js file with router */
const express = require('express')
const router = express.Router()

const view = require('../utils/paths/view')

router.get('/', (req, res, next) => {
    return res.status(200).sendFile(
        view('products.html')
    ) 
})

module.exports = router


/* index.js file with router */
const express = require('express')
const router = express.Router()

const view = require('../utils/paths/view')

router.get('/', (req, res, next) => {
    return res.status(200).sendFile(
        view('index.html')
    ) 
})

module.exports = router


/* app.js */
const express = require('express') 
const app = express()

const http = require('http')

const view = require('./utils/paths/view')

const productRoutes = require('./routes/products')
const indexRoutes = require('./routes/index')

app.use('/products', productRoutes) // Use product routes as middleware
app.use('/', indexRoutes) // Use index routes

app.use((req, res, next) => {
    return res.status(404).sendFile(
        view('not_found.html')
    ) 
})


const server = http.createServer(app)
server.listen(8083)