const knex = require('./db/index.js');

// can I refactor to use a join in my query?

const controller = {
  selectBookingsById: id =>
    knex
      .select()
      .from('bookings')
      .where({ room_id: id }),
  selectRoomById: id =>
    knex
      .select()
      .from('rooms')
      .where({ id: id }),
};

module.exports = controller;
