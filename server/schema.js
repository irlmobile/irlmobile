var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/irlmobile');

var SpotSchema = new Schema({
  name: String,
  address: String,
  coordinates: {latitude: Number, longitude: Number}
});

var UserSchema = new Schema({
  name: String,
  email: String,
  picture: String
});

module.exports = mongoose.model('Spot', SpotSchema);
module.exports = mongoose.model('User', UserSchema);