const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const config = require('./dbconfig/database');
const passport = require('passport');
const app = express();

const port = process.env.PORT || 5000; //for Heroku
const host = 'localhost' || '0.0.0.0';  //for Heroku

// Note model
const User = require('./dbmodels/user');

// Product model
const Product = require('./dbmodels/product');

// Cart model
const Cart = require('./dbmodels/cart');

//passport
app.use(passport.initialize());
require('./passport')(passport);

// // Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
// 	// Set static folder
// 	app.use(express.static('client/build'));​
// 	app.get('*', (req, res) => {
// 		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
// 	});
// }

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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'static')));
  // app.get('*', (req, res) => {
  //     res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
  //   });
}

app.listen(port, host, (req, res) => {
  console.log(`Server is listening on port: ${port}`)
})