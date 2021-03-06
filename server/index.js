const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = 3000;

app
  .use(bodyParser.json())
  .use(morgan('dev'))
  .use('/rooms', express.static(path.join(__dirname, '../client/dist')))
  .use('/rooms', routes)
  .use('/', routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
