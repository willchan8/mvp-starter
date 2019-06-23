var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yelp');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var restaurantSchema = mongoose.Schema({
  id: String,
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
  distance: Number
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

var selectAll = function(callback) {
  Restaurant.find({}, function(err, restaurants) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, restaurants);
    }
  });
};

module.exports = {selectAll, Restaurant};