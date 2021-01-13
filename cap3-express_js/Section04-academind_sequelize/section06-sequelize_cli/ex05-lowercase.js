/*
    On the last example, we created a table that had the first letter UC. This is against sql 
    table naming best practice, so we'll make the necessary changes
*/

/* On user.js */
'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        static associate(models) {

        }
    };

    User.init({
        // We've also added not null to the table columns
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
        tableName: 'users', // Added this option.
        modelName: 'User',
    });

    return User;
};

/* The migration: */
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', { // 'Users' => 'users'
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false // Added not null to the custom table columns
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
        await queryInterface.dropTable('users'); // Also changed to 'users' here
    }
};

/* sequelize db:migrate:undo */
/* sequelize db:migrate */
