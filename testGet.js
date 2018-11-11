// const knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host: 'fec8-availability.chnrg8w18zdf.us-east-2.rds.amazonaws.com',
//     user: 'rohannobis',
//     password: 'MTqv2twy98',
//     database: 'availability',
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

const testGet = () => {
  knex('bookings')
    .select('*')
    .then(book => {
      console.log(book);
    });
};

testGet();
