const knex = require('knex');
const config = require('../knexfile.js');

const dbEnv = proves.env.DB_ENV || 'development';

module.exports = knex(config[dbEnv]);