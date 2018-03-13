
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('playdates').del()
    .then(function () {
      // Inserts seed entries
      return knex("playdates").insert([
        {
          place: "My house",
          address: "515 E. Grant St., Phoenix, AZ 85004",
          date: "3/20/2018",
          activity: "Building with Legos!",
          notes: "Willing to host 2 kids to play legos with my son",
          playdate_creator: 2
        },
        {
          place: "Neighborhood park",
          address: "1 N. Central Ave., Phoenix, AZ 85009",
          date: "3/24/2018",
          activity: "Soocer",
          notes: "Looking to gather a group of kids to play soccer",
          playdate_creator: 1
        }
      ]);
    });
};
