const BrandModel = require('../models/brand_model')
const {validationResult} = require('express-validator')

// INDEX

// POST
exports.postBrand = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Query is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()
        throw err
    }

    const {name} = req.body

    BrandModel.create({name})
    .then(newBrand => {
        res.status(201).json({
            message: 'Brand created!',
            brand: newBrand
        })
    })
    .catch(err => {
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err)
    })
}

// PATCH
exports.updateBrand = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        const err = new Error('Validation failed. Query is incorrect!')
        err.statusCode = 422
        err.errors = errors.array()
        throw err
    }

    const {id} = req.params
    const {name} = req.body

    BrandModel.findByPk(id).then(brand => {
        if(!brand){
            const err = new Error('No brand found with given ID!')
            err.statusCode = 404
            throw err
        }

        brand.name = name || brand.name

        return brand.save()
    })
    .then(updatedBrand => {
        res.status(200).json({
            message: 'Brand updated!',
            brand: updatedBrand
        })
    })
    .catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not update brand.'
        res.status(statusCode).json({message: errMessage})
    })
}

// DELETE
exports.deleteBrand = (req, res, next) => {
    const {id} = req.params

    BrandModel.findByPk(id).then(brand => {
        if(!brand){
            const err = new Error('No brand found with given ID!')
            err.statusCode = 404
            throw err
        }

        return brand.destroy()
    })
    .then(() => {
        res.status(200).json({message: 'Brand deleted!'})
    })
    .catch(err => {
        const statusCode = err.statusCode || 500
        const errMessage = err.message || 'Could not delete brand.'
        res.status(statusCode).json({message: errMessage})
    })
}
