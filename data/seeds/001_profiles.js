const faker = require('faker');
let arr = [8755, 12591, 125598, 127646, 128696, 134293, 137065, 
  137805, 147190, 149632, 162082, 178690, 185286, 186887, 200327, 201876, 
  206733, 210531, 223988, 242201, 243756, 245391, 44160, 254551, 10724, 32752, 
  62780, 26626, 69127, 74535, 188091, 206293, 63768, 116709, 151889, 163408, 
  193999, 255777, 104521, 220008, 162776, 208024, 209485, 16944, 141192, 170219, 
  52478, 86985, 138133, 146247]

const profiles = [...new Array(5)].map((i, idx) => ({
  id: idx === 0 ? '00ulthapbErVUwVJy4x6' : faker.random.alphaNumeric(20),
  ds_user_id: arr[faker.random.number(49)],
  avatarUrl: faker.image.avatar(),
  email: idx === 0 ? 'llama001@maildrop.cc"' : faker.internet.email(),
  name:
    idx === 0
      ? 'Test001 User'
      : `${faker.name.firstName()} ${faker.name.lastName()}`,
}));

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('profiles')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert(profiles);
    });
};
