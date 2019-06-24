const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yelp');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const restaurantSchema = mongoose.Schema({
  id: {type: String, unique: true},
  alias: String,
  name: String,
  image_url: String,
  is_closed: Boolean,
  url: String,
  review_count: Number,
  categories: [{alias: String, title: String}],
  rating: Number,
  coordinates: {latitude: Number, longitude: Number},
  transactions: [String],
  price: String,
  location: {
      address1: String,
      address2: String,
      address3: String,
      city: String,
      zip_code: Number,
      country: String,
      state: String,
      display_address: [String]
  },
  phone: String,
  display_phone: String,
  distance: Number,
  visited: Boolean
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

const selectAll = (callback) => {
  Restaurant.find({}, (err, restaurants) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, restaurants);
    }
  });
};

const VisitedRestaurant = mongoose.model('VisitedRestaurant', restaurantSchema);

const getVisited = (callback) => {
  VisitedRestaurant.find({}, (err, restaurants) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, restaurants);
    }
  });
};

const postVisited = (restaurantObj, callback) => {
  VisitedRestaurant.create(restaurantObj, (err) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, restaurantObj);
    }
  });
};

module.exports = {
  selectAll, Restaurant, 
  getVisited, postVisited, VisitedRestaurant};