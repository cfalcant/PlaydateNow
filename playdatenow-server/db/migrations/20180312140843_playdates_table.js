
exports.up = function(knex, Promise) {
    return knex.schema.createTable('playdates', function(table){
        table.increments();
        table.string('place').notNullable();
        table.string('address').notNullable();
        table.string('date').notNullable();
        table.string('activity').notNullable();
        table.text('notes').notNullable();
        table.integer('playdate_creator').references('id').inTable('users')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('playdates');    
};
