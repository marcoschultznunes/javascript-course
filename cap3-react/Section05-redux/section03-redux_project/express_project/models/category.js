'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
        static associate({Product, ProductCategory}) {
            this.belongsToMany(Product, {
                through: ProductCategory,
                as: 'products',
                foreignKey: 'categoryId'
            })
        }
    };
    Category.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'categories',
        modelName: 'Category',
    });
    return Category;
};