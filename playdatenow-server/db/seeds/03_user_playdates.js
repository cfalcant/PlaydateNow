
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_playdates').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_playdates').insert([
        // {id: 1, colName: 'rowValue1'},
        {user_id: 1, playdate_id: 1},
        
      ]);
    });
};
