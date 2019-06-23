const mongoose = require('mongoose');
const data = require('./data');
const { Restaurant } = require('./index');

Restaurant.collection.drop(() => {});

const restaurantsArray = data.businesses;

Restaurant.insertMany(restaurantsArray, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully seeded database!');
    mongoose.connection.close();
  }
});
