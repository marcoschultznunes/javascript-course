'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class TagPost extends Model {
        
    };

    TagPost.init({}, {
        sequelize,
        timestamps: false,
        tableName: 'tag_post',
        modelName: 'TagPost'
    });

    return TagPost;
};
