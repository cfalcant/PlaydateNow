const express = require("express");
const router = express.Router();
const knex = require("../db/knex");

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('playdates')
    .select()
    .orderBy('id', 'asc')
    .then(playdates => res.json(playdates));
});

router.get('/:id', function(req, res) {
  knex('playdates')
    .select()
    .where('id', req.params.id)
    .then(playdate => res.json(playdate));
});

router.post('/', function(req, res) {
  knex('playdates')
    .insert(req.body, "*")
    .then(newPlaydate => res.json(newPlaydate));
});

router.patch('/edit/:id', function(req, res) {
  knex('playdates')
    .update(req.body[0])
    .where('id', req.params.id)
    .returning("*")
    .then(updatedPlaydate => {
      res.json(updatedPlaydate);
    });
});

router.get('/delete/:id', function(req, res) {
  knex('playdates')
    .del()
    .where('id', req.params.id)
    .returning('*')
    .then(() => {
      knex("playdates").then(playdates =>
        res.json(playdates)
      );
    })
    .catch(err => res.json(err))
});

module.exports = router;
