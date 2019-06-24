const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const restaurants = require('../database');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/restaurants', (req, res) => {
  restaurants.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('/restaurants/user', (req, res) => {
  restaurants.getVisited((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.post('/restaurants/user', (req, res) => {
  restaurants.postVisited(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

