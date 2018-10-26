const faker = require("faker");

let createRoomRecord = (knex, id) => {
  return knex("rooms").insert({
    updated_at: faker.date.between("2018-10-26", "2019-2-31"),
    minimum_stay: faker.random.number({ min: 1, max: 5 }),
    defaults_to_available: faker.random.boolean()
  });
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  console.log("***seeded***");
  return knex("rooms")
    .del()
    .then(function() {
      let roomRecords = [];

      for (let i = 0; i < 100; i++) {
        roomRecords.push(createRoomRecord(knex, i));
      }

      return Promise.all(roomRecords);
    });
};
