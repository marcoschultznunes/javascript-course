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
}, {timestamps: false});

module.exports = Brand
