CREATE DATABASE availability;

USE bookings;

CREATE TABLE rooms (
  /* Describe your table here.*/

  id int NOT NULL AUTO_INCREMENT,
  defaultsToAvailable BOOLEAN NOT NULL,
  updatedAt DATE NOT NULL,
  minimumStay INT,
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */


CREATE TABLE bookings (
  id        int    NOT NULL AUTO_INCREMENT,
  checkIn   DATE   NOT NULL,
  checkOut  DATE   NOT NULL,
  room_id
  PRIMARY KEY (ID)
);