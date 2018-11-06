const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = 1338;

app
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use('/availability', express.static(path.join(__dirname, '../client/dist')))
  .use('/rooms', routes)
  .use('/', routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
