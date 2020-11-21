/*
    We'll now take the previous project and do a split in the routes files, separating the
    controller logic from the routing logic. The routes now will only contain the routes 
    and the functions which they call. Those functions will be defined in the controller 
    files.
*/

/* product_routes.js */
const express = require('express')
const router = express.Router()

const productController = require('../controllers/product_controller')

router.get('/', productController.getAllProducts)
router.get('/create', productController.getCreateProductPage)
router.post('/create', productController.postProduct)

module.exports = router

/* product_controller.js */
const products = [
    {
        name: 'Knife',
        brand: 'Tramontina',
        price: 16
    },
    {
        name: 'PC Desktop',
        brand: 'Dell',
        price: 2600
    },
    {
        name: 'Fan',
        brand: 'Arno',
        price: 180
    }
]

exports.getAllProducts = (req, res, next) => {
    return res.status(200).render('products', {
        pageTitle: 'Products',
        products: products
    })
}

exports.getCreateProductPage = (req, res, next) => {
    return res.status(200).render('create_product', {
        pageTitle: 'Create Product'
    })
}

exports.postProduct = (req, res, next) => {
    console.log(req.body)

    return res.redirect('/products')
}

/* 
    We did the same to index routes and to the not found error page. We also created a new 
server.js file, separating the createServer function from app.js, and in package.json, 
changing the main file to app/server.js 
*/

/* app.js */
const express = require('express') 
const app = express()

const path = require('path')
const bodyParser = require('body-parser')

const view = require('./utils/paths/view')

const productRoutes = require('./routes/product_routes')
const indexRoutes = require('./routes/index_routes')


app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(
    path.join(__dirname, 'public')
))

app.set('view engine', 'ejs')
app.set('views', 'app/views')

app.use('/products', productRoutes)
app.use('/', indexRoutes)

app.use((req, res, next) => {
    return res.status(404).render('not_found', {
        pageTitle: 'Not Found'
    })
})

module.exports = app // Only change, no more create server


/* server.js */
const app = require('./app')
const http = require('http')

const server = http.createServer(app)
server.listen(8083)

/*
    This change will become useful later on when we need to add configurations to the
    server.
*/