
exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_playdates', function(table){
        table.increments();
        table.integer('user_id').references('id').inTable('users');
        table.integer('playdate_id').references('id').inTable('playdates');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_playdates');
};
