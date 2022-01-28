const Sequelize = require("sequelize");
const dotenv = require('dotenv');
dotenv.config({
    path: './environment/local.env'
})

const { DATABASE_NAME, DATABASE_USER, DATABASE_PASS, DATABASE_HOST} = process.env

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASS, {
    host: DATABASE_HOST,
    dialect: 'mysql',
});

module.exports = sequelize