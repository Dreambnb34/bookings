const faker = require("faker");

let createBookingRecord = (knex, id) => {
  return knex("bookings").insert({
    check_in: faker.date.between("2018-10-26", "2019-2-31"),
    length_of_stay: faker.random.number({ min: 1, max: 7 })
  });
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("bookings")
    .del()
    .then(function() {
      // Inserts seed entries
      let bookingRecords = [];

      for (let j = 0; j < 100; j++) {
        bookingRecords.push(createBookingRecord(knex, j));
      }

      return Promise.all(bookingRecords);
    });
};
