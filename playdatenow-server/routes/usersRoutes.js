const express = require('express');
const router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('users')
    .select()
    .orderBy('id', 'asc')
    .then(users => res.json(users))
  })


module.exports = router;
