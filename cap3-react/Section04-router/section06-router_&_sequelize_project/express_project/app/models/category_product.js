const Sequelize = require('sequelize')
const db = require('../connection')

const CategoryProduct = db.define('category_product', {
    
}, {timestamps: false})

module.exports = CategoryProduct
