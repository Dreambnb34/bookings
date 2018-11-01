const express = require('express');
const controller = require('./controller');
const router = express.Router();

// define the home page route
router.get('/', (req, res) => {
  console.log('getting');
  res.send('Hello!!');
});

// define a test route
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
        sendToClient.push(booking);
      });
      return Promise.all(sendToClient);
    })
    .then(clientObjects => {
      res.send(clientObjects);
      console.log('yay');
    });
});

module.exports = router;
