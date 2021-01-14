/*
    Seeders allow us to populate our database with dummy data through a single command. In 
    sequelize they are designed like the migrations, with an up and down function.
*/

/*
    To create a seeder, use the following command:
        sequelize seed:generate --name seeder_name

    We'll create a seeder for users:
        sequelize seed:generate --name dummy_users
*/

/* The seeder file */
'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('users', [ // 'users' table
            {
                name: 'Joni',
                surname: 'Marconi Toni',
                email: 'igtaliani@gmail.it',
                password: 'pastelpizzaparmesao',
                uuid: '174448dc-da0f-45f5-84c1-82b87340cfbe', // I am required to specify uuid
                createdAt: new Date(),  // And specify createdAt and updatedAt values
                updatedAt: new Date()
            },
            {
                name: 'Tania',
                surname: 'Transilvania Mangolania',
                email: 'tchucaxuca@gaymail.com',
                password: 'wtfdisuganda',
                uuid: 'fd7ddc00-e9f8-4c63-aa82-4cf559b28735',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Gaius',
                surname: 'Biggus Dickus',
                email: 'bigoldick@dickmail.com',
                password: 'yousuquisuqui',
                uuid: 'f5ba4d4f-1b84-417a-8527-d2b6fc3df467',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Shit',
                surname: 'Dunga Nigrow',
                email: 'wtf@whatmail.com',
                password: 'niggabigdicka',
                uuid: '04822b9b-881a-4a37-8a4f-70d7d45cb3ae',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {}); // undo => delete * from table
    }
};


/* 
    Running the seeder:
        sequelize db:seed:all  

    Undoing (after implementing the down function):
        sequelize db:seed:undo  or  sequelize db:seed:undo:all
*/
