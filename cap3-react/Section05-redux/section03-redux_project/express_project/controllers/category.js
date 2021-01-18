const {Category, Product, Brand} = require('../models')
const {validationResult} = require('express-validator')
const {deleteImage} = require('../utils/imageFunctions')

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

// POST
exports.postCategory = async (req, res, next) => {
    try{
        if(!req.file){
            const err = new Error('Validation failed. No image provided.')
            err.statusCode = 422
            throw err
        }

        const errors = validationResult(req)

        if(!errors.isEmpty()){
            const err = new Error('Validation failed. Entered data is incorrect!')
            err.statusCode = 422
            err.errors = errors.array()

            if(req.file){
                deleteImage(req.file.path)
            }

            throw err
        }

        const {name} = req.body
        const imageUrl = req.file.path
        
        const newCategory = await Category.create({
            name: name, image: imageUrl
        })

        return res.status(201).json({
            message: 'Category created!',
            category: newCategory
        })

    } catch(err) {
        if(req.file){
            deleteImage(req.file.path)
        }
        next(err)
    }
}

// PATCH
exports.patchCategory = async (req, res, next) => {
    try{
        const errors = validationResult(req)
        
        if(!errors.isEmpty()){
            const err = new Error('Validation failed. Entered data is incorrect!')
            err.statusCode = 422
            err.errors = errors.array()

            if(req.file){
                deleteImage(req.file.path)
            }

            throw err
        }

        const {id} = req.params
        const {name} = req.body

        const category = await Category.findByPk(id)

        if(!category){
            const err = new Error('Category not found!')
            err.statusCode = 404
            throw err
        }

        let imageUrl = false

        if(req.file){
            imageUrl = req.file.path
            success = deleteImage(category.image)
        }

        category.name = name || category.name
        category.image = imageUrl || category.image

        const updatedCategory = await category.save()

        return res.status(200).json({
            message: 'Category updated!',
            category: updatedCategory
        })

    } catch(err) {
        if(req.file){
            deleteImage(req.file.path)
        }
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
