const CategoryModel = require('../models/categories')

// GET
exports.getCategories = async (req, res, next) => {
    try {
        const categories = await CategoryModel.find()

        return res.status(200).json({
            message: 'Fetched categories!',
            categories: categories
        })

    } catch(err) {
        next(err)
    }
}

// GET (id)
exports.getById = async (req, res, next) => {
    try {
        const {id} = req.params

        const category = await CategoryModel.findById(id)

        return res.status(200).json({
            message: 'Category fetched!',
            category
        })

    } catch(err) {
        next(err)
    }
}

// POST
exports.postCategory = async (req, res, next) => {
    try {
        const {name} = req.body

        const newCategory = await CategoryModel.create({name})

        return res.status(201).json({
            message: 'Category created!',
            category: newCategory
        })

    } catch(err) {
        // if(req.file){
        //     deleteImage(req.file.path)
        // }
        next(err)
    }
}

// PATCH
exports.patchCategory = async (req, res, next) => {
    try {
        const {id} = req.params
        const {name} = req.body

        const category = await CategoryModel.findById(id)

        if(!category){
            const err = new Error('Category not found!')
            err.statusCode = 404
            throw err
        }

        newCategory = {
            name: name || category.name
        }

        await CategoryModel.findByIdAndUpdate({_id: id}, newCategory)

        return res.status(200).json({
            message: 'Category updated!',
            category: newCategory
        })
    } catch(err) {
        // if(req.file){
        //     deleteImage(req.file.path)
        // }
        next(err)
    }
}

// DELETE
exports.deleteCategory = async (req, res, next) => {
    try {
        const {id} = req.params

        const category = await CategoryModel.findById(id)

        if(!category){
            const err = new Error('Category not found!')
            err.statusCode = 404
            throw err
        }

        await category.delete()

        return res.status(200).json({
            message: 'Category deleted!'
        })

    } catch(err) {
        // if(req.file){
        //     deleteImage(req.file.path)
        // }
        next(err)
    }
}
