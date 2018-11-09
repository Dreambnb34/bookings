const mysql = require('mysql');
const AWS = require('../../aws');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'fec8-availability.chnrg8w18zdf.us-east-2.rds.amazonaws.com',
    user: 'rohannobis',
    password: AWS.MYSQL_PASSWORD,
    database: 'availability',
    port: '3306',
  },
});

module.exports = knex;
