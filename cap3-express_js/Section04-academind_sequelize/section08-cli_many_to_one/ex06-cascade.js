/*
    We'll now add cascade to delete all posts when a user is deleted. To do this, we need
    to add onDelete: 'CASCADE' to the user model, as well as adding the reference to the 
    post migration. 
*/

/* On user model */
'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {

        static associate({Post}) {
            this.hasMany(Post, {
                foreignKey: 'userId', 
                as: 'posts', 
                onDelete: 'CASCADE', // CASCADE AND CONSTRAINTS
                constraints: true
            })  
        }

        toJSON(){
            return {
                ...this.get(),
                id: undefined
            }
        }
    };

    // Rest stays the same.
};

/* The post migration */
module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('posts', {
            
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE', // CASCADE
                references: { // References
                    model: 'users', // Table name
                    key: 'id',
                    as: 'userId',
                }
            }

            // Rest stays the same.
        });
    }
};


/* The delete product function */

// DELETE
exports.deletePost = (req, res, next) => {
    const {uuid} = req.params

    Post.findOne({where: {uuid: uuid} })
    .then(post => {
        if(!post){
            return res.status(404).json({
                message: 'No post found with given UUID.'
            })
        }

        return post.destroy()
    })
    .then(() => {
        return res.status(200).json({
            message: 'Post successfully deleted!'
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: 'Could not delete post.'
        })
    })
}
