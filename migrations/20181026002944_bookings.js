exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('rooms', table => {
      table.increments().primary();
      table.timestamps(false, true);
      table.integer('minimum_stay');
      table.boolean('defaults_to_available');
    })
    .createTable('bookings', table => {
      table.increments('booking_id').primary();
      table.date('check_in');
      table.integer('length_of_stay');
      table.integer('room_id').unsigned();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('rooms').dropTable('bookings');
};
