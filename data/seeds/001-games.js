
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, title: 'Frogger', genre: 'Arcade', releaseYear: 1981},
        {id: 2, title: 'Donkey Kong', genre: 'Arcade', releaseYear: 1981},
        {id: 3, title: 'Super Mario Bros 3', genre: 'Console - NES', releaseYear: 1990}
      ]);
    });
};
