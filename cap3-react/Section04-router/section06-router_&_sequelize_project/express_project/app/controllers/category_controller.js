const CategoryModel = require('../models/category_model')
const {validationResult} = require('express-validator')

// INDEX
exports.getCategories = (req, res, next) => {
    CategoryModel.findAll().then(categories => {
        res.status(200).json({
            message: 'Successfully fetched categories!',
            categories: categories
        })
    }).catch(err => {
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    })
}

// POST
exports.postCategory = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Query is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()
        throw err
    }

    const {name} = req.body

    CategoryModel.create({name})
        .then(newCat => {
            res.status(201).json({
                message: 'Category created!',
                category: newCat
            })
        })
        .catch(err => {
            if(!err.statusCode){
                err.statusCode = 500
            }
            next(err)
        })
}

// UPDATE
exports.updateCategory = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Query is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()
        throw err
    }

    const {id} = req.params
    const {name} = req.body

    CategoryModel.findByPk(id).then(category => {
        if(!category){
            const err = new Error('No category found with given ID!')
            err.statusCode = 404
            throw err
        }

        category.name = name || category.name

        return category.save()
    })
    .then(updatedCategory => {
        res.status(200).json({
            message: 'Category updated!',
            category: updatedCategory
        })
    })
    .catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not update category.'
        res.status(statusCode).json({message: errMessage})
    })
}

// DELETE
exports.deleteCategory = (req, res, next) => {
    const {id} = req.params

    CategoryModel.findByPk(id).then(category => {
        if(!category){
            const err = new Error('No category found with given ID!')
            err.statusCode = 404
            throw err
        }

        return category.destroy()
    })
    .then(() => {
        res.status(200).json({message: 'Category deleted!'})
    })
    .catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not delete category.'
        res.status(statusCode).json({message: errMessage})
    })
}

