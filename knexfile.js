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
      host: AWS.MYSQL_HOST,
      user: AWS.MYSQL_USERNAME,
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
