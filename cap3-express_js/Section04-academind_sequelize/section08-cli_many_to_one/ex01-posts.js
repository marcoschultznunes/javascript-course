/*
    First we'll generate the model and the migration with:
        sequelize model:generate --name Post --attributes title:string,body:string

    Then we'll add the necessary changes:
        - making the table name lowercase
        - adding the UUID field
        - (next example) add the one to many association with user
*/

/* post model */
'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {

        static associate(models) {

        }

        toJSON(){ // Added toJSON to ignore id
            return {
                ...this.get(),
                id: undefined
            }
        }
    };
    Post.init({
        uuid: { // Added UUID
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        title: { // Added not null to title and body
            type: DataTypes.STRING,
            allowNull: false  
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'posts', // added table name to 'posts'
        modelName: 'Post',
    });
    return Post;
};

/* post migration */
'use strict';

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('posts', { // 'Post' => 'posts'
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            uuid: { // Added UUID
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false // Added not null to title and body
            },
            body: {
                type: DataTypes.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            }
        });
    },
    down: async (queryInterface, DataTypes) => {
        await queryInterface.dropTable('posts'); // 'Post' => 'posts'
    }
};
