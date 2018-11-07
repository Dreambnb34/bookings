const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = 1338;

app.get('/availability', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/bundle.js'));
});

app
  .use(bodyParser.json())
  .use(morgan('dev'))
  // .use('/rooms/bundle.js', (req, res) => {
  //   console.log('bundle requested');
  //   res.status(200).sendFile(path.join(__dirname, '../client/dist/'));
  // })
  .use(express.static(path.join(__dirname, '../client/dist/')))
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  })
  .use('/rooms', routes)
  .use('/', routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
