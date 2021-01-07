const Sequelize = require('sequelize')
const db = require('../connection')

const Products = require('./product_model')

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
