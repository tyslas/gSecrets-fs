
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user_secret', table => {
      table.increments();
      table.integer('user_id');
      table.integer('secret_id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_secret')
  ]);
};
