exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('budget')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('budget').insert([
        { profileId: '00ulthapbErVUwVJy4x6' },
        { profileId: '00ulthapbErVUwVJy4x6' },
        { profileId: '00ulthapbErVUwVJy4x6' },
        { profileId: '00ulthapbErVUwVJy4x6' },
        { profileId: '00ulthapbErVUwVJy4x6' },
      ]);
    });
};
