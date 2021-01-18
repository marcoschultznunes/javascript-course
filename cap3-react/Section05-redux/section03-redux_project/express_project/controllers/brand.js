const {Brand, Product, Category} = require('../models')
const {validationResult} = require('express-validator')

exports.getBrands = async (req, res, next) => {
    try{
        const brands = await Brand.findAll()

        return res.status(200).json({
            message: 'Successfully fetched brands!',
            brands: brands
        })

    } catch(err) {
        next(err)
    }
}

exports.getBrandById = async (req, res, next) => {
    try{
        const {id} = req.params
 
        const brand = await Brand.findByPk(id, {
            include: [{
                model: Product, as: 'products', 
                include: {model: Category, as: 'categories', through: {attributes: []}}
            }]
        })

        if(!brand){
            const err = new Error('Brand not found!')
            err.statusCode = 404
            throw err
        }

        return res.status(200).json({
            message: 'Successfully fetched brand!',
            brand: brand
        })

    } catch(err) {
        next(err)
    }
}

exports.postBrand = async (req, res, next) => {
    try{
        const errors = validationResult(req)
        
        if(!errors.isEmpty()){
            const err = new Error('Validation failed. Entered data is incorrect!')
            err.statusCode = 422
            err.errors = errors.array()

            throw err
        }

        const {name} = req.body

        const newBrand = await Brand.create({name: name})

        return res.status(201).json({
            message: 'Brand created!',
            brand: newBrand
        })

    } catch(err) {
        next(err)
    }
}

exports.patchBrand = async (req, res, next) => {
    try{
        const errors = validationResult(req)
        
        if(!errors.isEmpty()){
            const err = new Error('Validation failed. Entered data is incorrect!')
            err.statusCode = 422
            err.errors = errors.array()

            throw err
        }

        const {id} = req.params
        const {name} = req.body

        const brand = await Brand.findByPk(id)

        if(!brand){
            const err = new Error('Brand not found!')
            err.statusCode = 404
            throw err
        }

        brand.name = name || brand.name

        const updatedBrand = await brand.save()

        return res.status(200).json({
            message: 'Updated brand!',
            brand: updatedBrand
        })

    } catch(err) {
        next(err)
    }
}

exports.deleteBrand = async (req, res, next) => {
    try{
        const {id} = req.params

        const brand = await Brand.findByPk(id)

        if(!brand){
            const err = new Error('Brand not found!')
            err.statusCode = 404
            throw err
        }

        await brand.destroy()

        return res.status(200).json({
            message: 'Deleted brand!'
        })
    } catch(err) {
        next(err)
    }
}
