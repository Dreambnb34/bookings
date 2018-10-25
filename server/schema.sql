CREATE DATABASE IF NOT EXISTS availability;

USE availability;

CREATE TABLE rooms (
  room_id INT NOT NULL AUTO_INCREMENT,
  defaults_to_available BOOLEAN NOT NULL,
  updated_at DATE NOT NULL,
  minimum_stay INT,
  PRIMARY KEY (room_id)
);

CREATE TABLE bookings (
  booking_id  INT    NOT NULL AUTO_INCREMENT,
  check_in     DATE   NOT NULL,
  check_out    DATE   NOT NULL,
  room_id     INT,
  PRIMARY KEY (booking_id),
  FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);
