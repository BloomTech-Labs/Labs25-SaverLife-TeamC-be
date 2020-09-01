exports.seed = function(knex) {
  return knex('categories').insert([
      {name: 'Household'},
      {name: 'Personal Care'},
      {name: 'Dining & Alcohol'},
      {name: 'Healthcare'},
      {name: 'Rent'},
      {name: 'Groceries'},
      {name: 'Utilities'},
      {name: 'Entertainment'},
      {name: 'Shopping'},

  ]);
};