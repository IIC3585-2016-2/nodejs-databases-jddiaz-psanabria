var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/transaction',function(req, res, next){
  return models.sequelize.transaction(function (t) {
    return models.User.create({
      username: 'sequelize_aux',
    }, {transaction: t}).then(function (user) {
      //throw new Error('rollback');
      return user;
    });
  }).then(function (result) {
      console.log('ok: ' + result.username);
      res.json('ok: ' + result.username);
  }).catch(function (err) {
      console.log(err);
      res.json(err);
  });
});

module.exports = router;
