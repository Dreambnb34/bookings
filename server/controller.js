const knex = require('./db/index.js');

const controller = {
  selectBookingsById: id =>
    knex
      .select()
      .from('bookings')
      .where({ room_id: id }),
};

module.exports = controller;
