'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Brand extends Model {
        static associate({Product}) {
            this.hasMany(Product, {foreignKey: 'brandId', as: 'products', onDelete: 'CASCADE', constraints: true})
        }

        toJSON(){
            return {
                ...this.get(),
                createdAt: undefined,
                updatedAt: undefined
            }
        }
    };
    Brand.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'brands',
        modelName: 'Brand',
    });
    return Brand;
};
