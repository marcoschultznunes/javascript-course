'use strict';

module.exports = {
    up: async (queryInterface, DataTypes) => {
        await queryInterface.createTable('posts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                onDelete: 'CASCADE',
                references: {
                    model: 'users',
                    key: 'id',
                    as: 'userId',
                }
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
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
        await queryInterface.dropTable('posts');
    }
};
