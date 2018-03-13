
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {firstname: 'Carlos', lastname: 'Alcantar', email: 'carlos@aol.com', password: 'carlos'},
        {firstname: 'Jennifer', lastname: 'Tristan', email: 'jen@aol.com', password: 'jen'},
        {firstname: 'Nick', lastname: 'Gatti', email: 'nick@aol.com', password: 'nick'}
      ]);
    });
};
