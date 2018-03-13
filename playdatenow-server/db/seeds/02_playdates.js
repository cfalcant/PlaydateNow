
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('playdates').del()
    .then(function () {
      // Inserts seed entries
      return knex('playdates').insert([
        {place: 'My house', address: '515 E. Grant St., Phoenix, AZ 85004', date: '2018-03-20', activity: 'Building with Legos!', notes: 'Willing to host 2 kids to play legos with my son', playdate_creator: 2 }
      ]);
    });
};
