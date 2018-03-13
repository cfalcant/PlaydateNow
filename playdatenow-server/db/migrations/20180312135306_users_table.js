
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table){
        table.increments();
        table.string('firstname').notNullable();
        table.string('lastname').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        // table.integer('active_playdates').references('user_id').inTable('user_playdates').onDelete('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
};
