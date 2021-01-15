'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {

        static associate({User, Tag, TagPost}) {
            this.belongsTo(User, {foreignKey: 'userId', as: 'user'})
            this.belongsToMany(Tag, {
                through: TagPost,
                as: 'tags',
                foreignKey: 'postId'
            })
        }

        toJSON(){
            return {
                ...this.get(),
                id: undefined,
                userId: undefined
            }
        }
    };
    Post.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'posts',
        modelName: 'Post',
    });
    return Post;
};
