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

// router.get('/users/:id/playdates', function (req, res){
//   knex('playdates', 'user_playdates')
//   .select(*)
//   where()
// })

router.get('/:id/playdates', function (req, res){
  // knex('user_playdates')
  // .select('user_playdates.user_id', 'user_playdates.playdate_id', 'playdates.place', 'playdates.date', 'playdates.activity', 'playdates.notes')
  // .join('playdates')
  // .where('user_playdates.playdate_id')
})

//WORKS
router.get('/:id', function (req, res){
  knex('users')
  .select()
  .where('id', req.params.id)
  .then(user => res.json(user))
})

// WILL NOT USE UNLESS A NEW USER CAN BE CREATED WITH LOGIN PAGE
// router.post('/', function(req, res) {
//   knex('users')
//     .insert(req.body, "*")
//     .then(newUser => res.json(newUser))
// })

//WORKS, I THINK..
router.patch('/edit/:id', function(req, res) {
  knex('users')
    .update(req.body)
    .where('id', req.params.id)
    .returning("*")
    .then(updatedUser => res.json(updatedUser))
    res.sendStatus(200)
})

//WORKS, KINDA?(SAYS "OK IN PM")
router.delete('/delete/:id', function(req, res) {
  knex('users')
    .del()
    .where('id', req.params.id)
    .then(removedUser => removedUser)
    res.sendStatus(200)
})


module.exports = router;
