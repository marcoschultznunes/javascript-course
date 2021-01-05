const ProductModel = require('../models/product_model')

exports.productIndex = (req, res, next) => {
    res.send('<h1>Products</h1>')
}
