exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('budget')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('budget').insert([
        { profileId: 1 },
        { profileId: 2 },
        { profileId: 3 },
        { profileId: 4 },
        { profileId: 5 },
      ]);
    });
};
