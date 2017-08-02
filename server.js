var express = require('express');
var {ObjectID} = require('mongodb');
var bodyParser = require('body-parser');

var {mongoose} = require('./db-connect/db-connect');
var {Product} = require('./model/product');


var app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.json());

app.post('/',(req,res) => {

});


app.get('/product', (req, res) => {
  var product = new Product({
    name: req.body.name
  });

  product.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
