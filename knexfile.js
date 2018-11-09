// Update with your config settings.
const AWS = require('./aws');

module.exports = {
  development: {
    client: 'mysql',
    // connection: {
    //   database: "availability",
    //   user: "student",
    //   password: "student"
    // }
    connection: {
      host: 'fec8-availability.chnrg8w18zdf.us-east-2.rds.amazonaws.com',
      user: 'rohannobis',
      password: AWS.MYSQL_PASSWORD,
      database: 'availability',
      port: '3306',
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'availability',
      user: 'student',
      password: 'student',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
