// const mysql = require('mysql');
// const knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: 'fec8-availability.chnrg8w18zdf.us-east-2.rds.amazonaws.com',
//     user: process.env.MYSQL_USERNAME,
//     password: process.env.MYSQL_PASSWORD,
//     database: 'availability',
//     port: '3306',
//   },
// });

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_URL,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
  },
});

module.exports = knex;
