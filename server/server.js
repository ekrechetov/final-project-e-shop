const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./dbconfig/database');
const passport = require('passport');
const PORT = 5000;
const app = express();

// Note model
const User = require('./dbmodels/user');


// Product model
const Product = require('./dbmodels/product');

//passport
app.use(passport.initialize());
require('./passport')(passport);

//mongoose connect
mongoose.connect(config.database, { useNewUrlParser: true, useFindAndModify: false} );

// Mongoose connection
const db = mongoose.connection;

// Check connection
db.once('open', function () {
    console.log('Connected to MongoDB');
});

// Check for db errors
db.on('error', function (err) {
    console.error(err);
});

// parse application/json
app.use(bodyParser.json());
app.use('/', require('./api'));

//test for users
// app.get('/users', (req, res) => {
//   res.json(User)
// });

//test get products for cart:
app.get('/cart', (req, res) => {
  Product.find({}, function(err, result){     
  if(err) return console.log(err);   
  console.log("Products is finded");
  console.log(result);
  res.send(result);
  });  
});

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port: ${PORT}`)
})