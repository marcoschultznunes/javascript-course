/*
    To hide the ID, we only need to overwrite the user model's toJSON function without
    the ID.
*/

/* user model */
'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        static associate(models) {

        }

        toJSON(){ // The toJSON function
            return {
                ...this.get(), // Gets all of the model's fields
                id: undefined
            }
        }
    };

    /* The rest stays the same. */
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

