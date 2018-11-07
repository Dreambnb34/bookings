const express = require('express');
const path = require('path');
const cors = require('cors');

const controller = require('./controller');

const router = express.Router();

router.options('*', cors());

// define the home page route
router.get('http://localhost:1338/rooms/:roomId', (req, res) => {
  console.log('getting');
  res.sendFile('index.html', {
    root: path.join(__dirname, '../client/dist'),
  });
});

// define a route to grab all bookings for a room
router.get('/api/availability/:roomId', (req, res) => {
  const { roomId } = req.params;
  controller
    .selectBookingsById(roomId)
    .then(data => {
      // console.log('then 1');
      return data;
    })
    .then(bookings => {
      // console.log('then 2');
      // construct object to send client
      const sendToClient = [];
      bookings.forEach(booking => {
        let clientObj = {
          check_in: new Date(booking.check_in),
          length_of_stay: booking.length_of_stay,
          booking_id: booking.booking_id,
        };
        sendToClient.push(clientObj);
      });
      return Promise.all(sendToClient);
    })
    .then(clientObjects => {
/
      // clientObjects is array of bookings
      const finalClientObj = {};
      finalClientObj['data'] = clientObjects;
      finalClientObj['room_info'] = [];

      // finalClientObj['room_info'].push(
      //   Promise.resolve(controller.selectRoomById(roomId)),
      // );

      controller.selectRoomById(roomId).then(room_data => {
        finalClientObj['room_info'] = room_data;
        res.set('Content-Type', 'application/json');
        // res.setHeader('Access-Control-Allow-Origin');
        res.send(finalClientObj);
      });
    })
    .then(finalClientObj => {
      // console.log('yay');
      // console.log(finalClientObj);
    });
});

module.exports = router;
