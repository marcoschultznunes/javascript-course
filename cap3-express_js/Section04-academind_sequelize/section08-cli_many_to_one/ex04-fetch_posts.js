/*
    We want to ignore the userId field when fetching posts, and also bring the user without its
    id, so we must modify the toJSON on the model.
*/

/* post model */
'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {

        static associate({User}) {
            this.belongsTo(User, {foreignKey: 'userId', as: 'user'})
        }

        toJSON(){
            return {
                ...this.get(),
                id: undefined,
                userId: undefined // userId now ignored
            }
        }

        // Rest stays the same.
    };
};

/* 
    To add the user without the id we'll use include on the fetch function. 
*/

/* post controller */

// INDEX
exports.fetchPosts = (req, res, next) => {
    Post.findAll({ include: [{model: User, as: 'user'}] }).then(posts => {
        return res.status(200).json({
            message: 'Successfully fetched posts!',
            posts: posts
        })
    })
    .catch(err => {
        return res.status(500).json({
            message: 'Could not fetch posts.'
        })
    })
}
