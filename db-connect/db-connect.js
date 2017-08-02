var mongoose = require('mongoose');

mongoose.Promise = global.Promise;


mongoose.createConnection('mongodb://ds127993.mlab.com:27993/Products',(err) =>
{
  if(err)
  {
    return console.log(`error in MONGO ${err}`);
  }
  console.log("Connected");
});

module.export = {mongoose};
