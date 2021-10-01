const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const app = express();
var router = require('./routes/qaRoutes');

const port = 3000
// compress all responses
app.use(compression());
app.use(morgan('dev'));
app.set('port', 3000);

app.use(express.json());

app.use('/qa', router);

app.use('/hello', (req, res) => res.status(200).send('hello'));


app.listen(port, () => {
  console.log(`Questions and Answers server listening at http://localhost:${port}`)
})




// compression
// https://www.digitalocean.com/community/tutorials/nodejs-compression

// server.js

// BASE SETUP
// ==============================================

// var express = require('express');
// var app = express();
// var port = process.env.PORT || 8080;

// ROUTES
// ==============================================

// sample route with a route the way we're used to seeing it
// app.get('/sample', function (req, res) {
//   res.send('this is a sample!');
// });

// we'll create our routes here

// START THE SERVER
// ==============================================
// app.listen(port);
// console.log('Magic happens on port ' + port);

// https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4