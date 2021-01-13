/*
    The db configuration file is now config/config.json, where we have not only connection
    to the development database, but also for databases of different environments, such as 
    testing and production.
*/

/*
    On models/index.js we can specify the environment selected by modifying the following line:
*/
const env = process.env.NODE_ENV || 'development';

/* We should also delete this line, as it adds an unnecessary export: */
db.Sequelize = Sequelize;

