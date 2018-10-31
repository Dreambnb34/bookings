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
  let id = req.params.roomId;
  console.log(parms);
  res.send('Testing Testing 123');
});

module.exports = router;
