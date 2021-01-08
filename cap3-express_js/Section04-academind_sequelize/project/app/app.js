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


const product_routes = require('./routes/product_routes')
const user_routes = require('./routes/user_routes')
const brand_routes = require('./routes/brand_routes')
const category_routes = require('./routes/category_routes')

app.use('/products', product_routes)
app.use('/users', user_routes)
app.use('/brands', brand_routes)
app.use('/categories', category_routes)

const Product = require('./models/product_model')
const Brand = require('./models/brand_model')
const Category = require('./models/category_model')

Product.belongsTo(Brand, {constraints: true, onDelete: 'CASCADE'})
Brand.hasMany(Product)

Product.belongsToMany(Category, {as: 'categories', through: 'category_product' });
Category.belongsToMany(Product, {as: 'products', through: 'category_product' });

db.sync().then(result => {
    app.use((req, res, next) => {
        res.send('<h1>It just works!</h1>')
    })
}).catch(err => {
    console.log(err)
    app = null
})

module.exports = app
