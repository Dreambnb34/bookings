// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: "availability",
      user: "student",
      password: "student"
    }
  },

  staging: {
    client: "mysql",
    connection: {
      database: "availability",
      user: "student",
      password: "student"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "mysql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
