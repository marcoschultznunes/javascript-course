const express = require('express')
let app = express()

const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const db = require('./connection')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");
    return next();
});

const categoryRoutes = require('./routes/category_routes')
const productRoutes = require('./routes/product_routes')
const brandRoutes = require('./routes/brand_routes')

app.use('/categories', categoryRoutes)
app.use('/products', productRoutes)
app.use('/brands', brandRoutes)

const CategoryModel = require('./models/category_model')
const ProductModel = require('./models/product_model')
const CategoryProduct = require('./models/category_product')
const BrandModel = require('./models/brand_model')

CategoryModel.belongsToMany(ProductModel, {as: 'products', through: CategoryProduct})
ProductModel.belongsToMany(CategoryModel, {as: 'categories', through: CategoryProduct})

ProductModel.belongsTo(BrandModel, {constraints: true, onDelete: 'CASCADE', as: 'brand'})
BrandModel.hasMany(ProductModel)

db.sync({force: true}).then(result => {
    app.use((req, res, next) => {
        res.send('<h1>It just works!</h1>')
    })

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
