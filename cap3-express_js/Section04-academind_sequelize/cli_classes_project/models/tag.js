'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Tag extends Model {

        static associate({Post, TagPost}) {
            this.belongsToMany(Post, {
                through: TagPost,
                as: 'posts',
                foreignKey: 'tagId'
            })
        }
    };
    Tag.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'tags',
        modelName: 'Tag',
        timestamps: false
    });
    return Tag;
};
