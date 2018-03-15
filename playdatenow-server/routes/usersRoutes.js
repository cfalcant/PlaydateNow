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

router.get('/:id/playdates', function (req, res){
  knex("users")
    .join("user_playdates", "users.id", "=", "user_playdates.user_id")
    .join("playdates", "playdates.id", "=", "user_playdates.playdate_id")
    .select("playdates.place", "playdates.address", "playdates.date", "playdates.activity", "playdates.notes")
    .where("users.id", req.params.id)
    .then(playdates => {
      // console.log(playdates);
      res.json(playdates);
    });

})

router.get('/:id', function (req, res){
  knex('users')
  .select()
  .where('id', req.params.id)
  .then(user => res.json(user))
})

router.post('/', function(req, res) {
  knex('users')
    .insert(req.body, "*")
    .then(newUser => res.json(newUser))
})

router.patch('/edit/:id', function(req, res) {
  knex('users')
    .update(req.body[0])
    .where('id', req.params.id)
    .returning("*")
    .then(updatedUser => {
      res.json(updatedUser)
    })
})

router.delete('/delete/:id', function(req, res) {
  knex('users')
    .del()
    .where('id', req.params.id)
    .then(removedUser => removedUser)
    res.send('done!')
})


module.exports = router;
