const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const path = require('path');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/', (req, res) => {
  res.send(200);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
