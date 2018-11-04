const faker = require('faker');

let createBookingRecord = (knex, id, bookingsPerRoom) => {
  return knex('bookings').insert({
    check_in: faker.date.between('2018-10-26', '2019-2-31'),
    length_of_stay: faker.random.number({ min: 1, max: 7 }),
    room_id: bookingsPerRoom,
  });
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bookings')
    .del()
    .then(function() {
      // Inserts seed entries
      let bookingRecords = [];
      for (let j = 101; j < 200; j++) {
        let bookingsPerRoom = faker.random.number({ min: 5, max: 15 });
        for (let b = 0; b < bookingsPerRoom; b++) {
          bookingRecords.push(createBookingRecord(knex, j, j));
        }
      }

      return Promise.all(bookingRecords);
    });
};
