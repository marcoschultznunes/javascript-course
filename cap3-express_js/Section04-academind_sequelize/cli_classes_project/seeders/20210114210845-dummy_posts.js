'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
    up: async (queryInterface, Sequelize) => {

        let users = await queryInterface.sequelize.query(
            'SELECT id from users;'
        );

        users = users[0]

        await queryInterface.bulkInsert('posts', [
            {
                title: 'Hello There',
                body: 'The angel from my nightmare, the shadow in the background of the morgue',
                userId: users[0].id,
                uuid: uuidv4(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Where Are You?',
                body: "And i'm so sorry, i cannot sleep, i cannot dream tonight...",
                userId: users[0].id,
                uuid: uuidv4(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Proverb',
                body: 'Big dawg, big nuts',
                userId: users[0].id,
                uuid: uuidv4(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {   
                title: 'Yee yee ass haircut',
                body: "Ah nigga don't hate me cause i'm beautiful nigga, maybe if you got rid of tha yee yee ass haircut you got you'd get some bitches on yo dick",
                userId: users[1].id,
                uuid: uuidv4(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Roofs',
                body: 'From the roofs of our homes the dawn begins...',
                userId: users[3].id,
                uuid: uuidv4(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                title: 'Vessel',
                body: "I wan't to look it in the eyes and fall into tears!",
                userId: users[3].id,
                uuid: uuidv4(),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('posts', null, {});
    }
};
