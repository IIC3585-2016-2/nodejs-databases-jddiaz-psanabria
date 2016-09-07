var express = require('express');
var mongoose = require('mongoose');
var faker = require('faker');
var morgan = require('morgan');
var Person = require('./model').Person;

var app = express();
app.use(morgan('dev'));

app.get('/', function (req, res) {
  Person.find(function (err, persons) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(persons));
  })
});

app.get('/create', function (req, res) {
  Person.create({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }, function (err, person) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(person));
    });
});

app.listen(3000, function () {
  console.log('App running on port 3000');
});
