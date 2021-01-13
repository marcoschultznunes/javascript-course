/*
    We can generate a model file with the command (no spaces between the attributes)
        sequelize model:generate --name ModelName --attributes attributeName:type, 
        attribute2:string,attribute3:integer

    We do not need to enter the attributes right now, we could also just manually add the 
    attributes later.

    A migration is automatically created, and so are the ID, the createdAt and the updatedAt 
    fields.
*/


/* 
    sequelize model:generate --name User --attributes name:string,surname:string,email:string,
    password:string 
*/

/* The user.js model generated */
'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };

    User.init({
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    
    return User;
};

/* The migration generated */
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            surname: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Users');
    }
};

/* sequelize db:migrate */
