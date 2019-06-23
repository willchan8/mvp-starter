const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const restaurants = require('../database');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/restaurants', function (req, res) {
  restaurants.selectAll(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

