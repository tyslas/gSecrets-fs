
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('secret').del()
    .then(function () {
      // Inserts seed entries
      return knex('secret').insert([
        {id: 1, secret: 'I like to bob for apples in the toilet (sandlot)'}
      ]);
    });
};
