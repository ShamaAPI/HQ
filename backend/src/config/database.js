const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, // Set to console.log to see SQL queries
});

module.exports = sequelize;