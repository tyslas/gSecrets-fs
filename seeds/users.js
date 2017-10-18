
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {id: 1, username: 'joeBob', email: 'joeBob@email.com', code: '1234'},
        {id: 2, username: 'arodgers', email: 'mrbrokencollarbone@email.com', code: '5678'},
        {id: 3, username: 'dougFunny', email: 'ilovepattymayo@email.com', code: '9012'}
      ]);
    });
};
