/* 
    To add a many-to-many association, i'll add a category table, which will be associated with
    products. A product can be of multiple categories and a category has many products.
*/

/* category_model.js */
const Sequelize = require('sequelize')
const db = require('../connection')

const Category = db.define('category', {
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

module.exports = Category


