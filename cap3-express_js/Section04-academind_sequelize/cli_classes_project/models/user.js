'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        static associate({Post}) {
            this.hasMany(Post, {foreignKey: 'userId', as: 'posts', onDelete: 'CASCADE', constraints: true})
        }

        toJSON(){
            return {
                ...this.get(),
                id: undefined
            }
        }
    };

    User.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        sequelize,
        tableName: 'users',
        modelName: 'User',
    });

    return User;
};
