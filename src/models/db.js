const Sequelize = require('sequelize');
require('dotenv').config();
// Datebase specs pointing to env
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});
// Creating database to hold URLS
const urlBank = sequelize.define('url', {
  url: {
    type: Sequelize.STRING,
  },
  shortUrl: {
    type: Sequelize.STRING,
  },
});

sequelize.sync();
// Making database avaiable to other files
exports.sequelize = sequelize;
exports.url = urlBank;
