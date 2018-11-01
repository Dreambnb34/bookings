const express = require('express');
const path = require('path');

const controller = require('./controller');
const router = express.Router();

// define the home page route
router.get('/:roomId', (req, res) => {
  console.log('getting');
  res.sendFile('index.html', {
    root: path.join(__dirname, '../client/dist'),
  });
});

// define a route to grab all bookings for a room
router.get('/api/rooms/:roomId', (req, res) => {
  const { roomId } = req.params;
  controller
    .selectBookingsById(roomId)
    .then(data => {
      console.log(data);
      return data;
    })
    .then(bookings => {
      // construct object to send client
      const sendToClient = [];
      bookings.forEach(booking => {
        let clientObj = {
          check_in: booking.check_in,
          length_of_stay: booking.length_of_stay,
          booking_id: booking.booking_id,
        };
        sendToClient.push(clientObj);
      });
      return Promise.all(sendToClient);
    })
    .then(clientObjects => {
      res.send(clientObjects);
      console.log('yay');
    });
});

module.exports = router;
