/* 
    We'll turn the brand field on products into an entity itself, with ID and name. Then, we 
    will connect them.
*/

/* brand_model.js */
const Sequelize = require('sequelize')
const db = require('../connection')

const Brand = db.define('brand', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Brand

/* brand_controller.js */
const BrandModel = require('../models/brand_model')

exports.brandIndex = (req, res, next) => {
    BrandModel.findAll()
        .then((brands) => {
            res.status(200).json({message: 'Successfully fetched brands!', brands: brands})
        })
        .catch(err => {
            const statusCode = err.statusCode || 500
            const errMessage = err.message || 'Could not fetch brands.'
            res.status(statusCode).json({message: errMessage})
        })
}

exports.createBrand = (req, res, next) => {
    const {name} = req.body

    BrandModel.create({name: name})
        .then((createdBrand) => {
            res.status(201).json({message: 'Brand created!', brand: createdBrand})
        })
        .catch(err => {
            const statusCode = err.statusCode || 500
            const errMessage = err.message || 'Could not create brand.'
            res.status(statusCode).json({message: errMessage})
        })
}

exports.updateBrand = (req, res, next) => {
    const {id} = req.params
    const {name} = req.body

    BrandModel.findByPk(id)
        .then(brand => {
            if(!brand){
                const err = new Error('No brand found with given ID!')
                err.statusCode = 404
                throw err
            }

            brand.name = name || brand.name

            return brand.save()
        })
        .then((updatedBrand) => {
            res.status(200).json({message: 'Brand successfully updated!', brand: updatedBrand})
        })
        .catch(err => {
            const statusCode = err.statusCode || 500
            const errMessage = err.message || 'Could not update brand.'
            res.status(statusCode).json({message: errMessage})
        })
}

exports.deleteBrand = (req, res, next) => {
    const {id} = req.params

    BrandModel.findByPk(id)
        .then(brand => {
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

/* brand_routes.js */
const express = require('express')
const router = express.Router()

const brand_controller = require('../controllers/brand_controller')

router.get('/', brand_controller.brandIndex)
router.post('/', brand_controller.createBrand)
router.patch('/:id', brand_controller.updateBrand)
router.delete('/:id', brand_controller.deleteBrand)

module.exports = router

/* On app.js */
const brand_routes = require('./routes/brand_routes')
app.use('/brands', brand_routes)

/* 
    On the next example, i'll connect brands to products, then i will need to make changes on
    the products, because the brand field will now be brand_id
*/
