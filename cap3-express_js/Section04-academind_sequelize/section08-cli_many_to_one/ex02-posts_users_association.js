/*
    Now we'll add the association with users to posts
*/

/* post model */
'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {

        static associate({User}) { // Associate modified
            this.belongsTo(User, {foreignKey: 'userId', as: 'user'})
        }

        toJSON(){
            return {
                ...this.get(),
                id: undefined
            }
        }
    };
    
    // The rest stays the same
};

/* Next, we need to add it to the user model */

/* user model */
'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        static associate({Post}) { // Associate modified
            this.hasMany(Post, {foreignKey: 'userId', as: 'posts'})
        }

        toJSON(){
            return {
                ...this.get(),
                id: undefined
            }
        }
    };

    // The rest stays the same
};

/* Finally, we need to add the field to the migration */

/* post migration */
'use strict';

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('posts', {
            
            userId: { // userId added
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                    as: 'userId',
                }
            }

            // Rest stays the same
        });
    }
};
