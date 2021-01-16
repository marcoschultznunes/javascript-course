'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ProductCategory extends Model {
        
    };
    ProductCategory.init({}, {
        sequelize,
        timestamps: false,
        tableName: 'product_category',
        modelName: 'ProductCategory',
    });
    return ProductCategory;
};