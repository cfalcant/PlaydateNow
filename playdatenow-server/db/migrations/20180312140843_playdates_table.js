
exports.up = function(knex, Promise) {
    return knex.schema.createTable('playdates', function(table){
        table.increments();
        table.string('location').notNullable();
        table.dateTime('date').notNullable();
        table.string('activity').notNullable();
        table.text('notes').notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('playdates');    
};
