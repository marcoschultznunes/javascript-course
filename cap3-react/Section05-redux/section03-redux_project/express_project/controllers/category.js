const {Category, Product, Brand} = require('../models')

exports.getCategories = async (req, res, next) => {
    try{
        const categories = await Category.findAll()

        return res.status(200).json({
            message: 'Successfully fetched categories!',
            categories: categories
        })

    } catch(err) {
        next(err)
    }
}

exports.getCategoryById = async (req, res, next) => {
    try{
        const {id} = req.params

        const category = await Category.findByPk(id, {
            include: [{
                model: Product, as: 'products', through: {attributes: []}, 
                include: {model: Brand, as: 'brand'}
            }]
        })

        if(!category){
            const err = new Error('Category not found!')
            err.statusCode = 404
            throw err
        }

        return res.status(200).json({
            message: 'Successfully fetched category!',
            category: category
        })

    } catch(err) {
        next(err)
    }
}

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

exports.patchCategory = async (req, res, next) => {
    try{
        const {id} = req.params
        const {name, image} = req.body

        const category = await Category.findByPk(id)

        if(!category){
            const err = new Error('Category not found!')
            err.statusCode = 404
            throw err
        }

        category.name = name || category.name
        category.image = image || category.image

        const updatedCategory = await category.save()

        return res.status(200).json({
            message: 'Category updated!',
            category: updatedCategory
        })

    } catch(err) {
        next(err)
    }
}

exports.deleteCategory = async (req, res, next) => {
    try{
        const {id} = req.params

        const category = await Category.findByPk(id)

        if(!category){
            const err = new Error('Category not found!')
            err.statusCode = 404
            throw err
        }

        await category.destroy()

        return res.status(200).json({
            message: 'Deleted category!'
        })

    } catch(err) {
        next(err)
    }
}
