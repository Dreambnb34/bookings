// Update with your config settings.
// const AWS = require('./aws');

module.exports = {
  development: {
    client: 'mysql',
    // connection: {
    //   database: "availability",
    //   user: "student",
    //   password: "student"
    // }
    connection: {
      host: process.env.DB_URL,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB,
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
