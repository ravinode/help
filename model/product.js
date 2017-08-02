var mongoose = require('mongoose');

var Product = mongoose.model('Product', {
  name:
  {
    type: String
  }
});

module.exports = {Product};
