const {Category} = require('../models')

exports.postCategory = async (req, res, next) => {
    try{
        const {name, image} = req.body
        
        const newCategory = await Category.create({
            name: name, image: image
        })

        return res.status(201).json({
            message: 'Category created!',
            category: newCategory
        })

    } catch(err) {
        next(err)
    }
}
