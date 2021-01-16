const {Product} = require('../models')

exports.postProduct = async (req, res, next) => {
    try{
        const {description, price, image, categories} = req.body

        const newProduct = await Product.create({
            description: description, price: price, image: image
        })

        await newProduct.setCategories(categories)

        return res.status(201).json({
            message: 'Product created!',
            category: newProduct
        })

    } catch(err) {
        next(err)
    }
}
