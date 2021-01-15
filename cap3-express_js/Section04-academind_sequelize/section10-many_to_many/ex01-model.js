/*
    We'll now add a many to many association, in that posts will have many tags.

    => tags
    sequelize model:generate --name Tag --attributes name:string
*/

/* Tag model */
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

/* We also need to add the association in post model */
class Post extends Model {

    static associate({User, Tag, TagPost}) {
        this.belongsTo(User, {foreignKey: 'userId', as: 'user'})
        this.belongsToMany(Tag, {
            through: TagPost,
            as: 'tags',
            foreignKey: 'postId'
        })
    }

    // The rest stays the same
}

/* tag migration */
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('tags', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('tags');
    }
};

/* tag_post model */
'use strict';

const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class TagPost extends Model {
        
    };

    TagPost.init({}, {
        sequelize,
        timestamps: false, // Not to have timestamps
        tableName: 'tag_post',
        modelName: 'TagPost'
    });

    return TagPost;
};
