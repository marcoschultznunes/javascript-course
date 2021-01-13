/*
    UUID is a field we add to our database which is similar to the mongodb id, in that is 
    unique and not related to the number of entries in our table. This way we can hide the id.
*/

/* user.js model */
'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {

        }
    };

    User.init({
        uuid: { // UUID field
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

/* user migration */
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            uuid: { // UUID field
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            surname: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    }
};

/* sequelize db:migrate:undo */
/* sequelize db:migrate */
