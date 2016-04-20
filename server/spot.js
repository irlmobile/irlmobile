var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SpotSchema = new Schema({
  name: String,
  address: String,
  coordinates: {latitude: Number, longitude: Number}
});

module.exports = mongoose.model('Spot', SpotSchema);