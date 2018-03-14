const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('playdates')
    .select()
    .orderBy("id", "asc")
    .then(playdates => res.json(playdates));
});

// router.get('/', function(req, res){

// })

module.exports = router;
