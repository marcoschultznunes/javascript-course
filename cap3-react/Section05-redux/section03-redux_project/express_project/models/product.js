'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate({Category, Brand, ProductCategory}) {
            this.belongsTo(Brand, {through: 'brandId', as: 'brand'})
            this.belongsToMany(Category, {
                through: ProductCategory,
                as: 'categories',
                foreignKey: 'productId',
                onDelete: 'CASCADE'
            })
        }
        
        toJSON(){
            return {
                ...this.get(),
                brandId: undefined
            }
        }
    };
    Product.init({
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'products',
        modelName: 'Product',
    });
    return Product;
};