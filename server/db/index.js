const mysql = require("mysql");
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: "student",
    password: "student",
    database: "availability"
  }
});
