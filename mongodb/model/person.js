var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});


module.exports = mongoose.model('Team', personSchema);
