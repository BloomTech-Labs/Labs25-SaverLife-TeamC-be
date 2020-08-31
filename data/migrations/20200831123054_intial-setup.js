exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('name');
      table.string('avatarUrl');
      table.timestamps(true, true);
      table.integer('goalAmount');
      table.date('goalStartDate');
    })
    .createTable('categories', function (table) {
      table.increments();
      table.string('name');
    })
    .createTable('transactions', function (table) {
      table.increments();
      table.string('profileId').references('id').inTable('profiles');
      table.integer('categoryId').references('id').inTable('categories');
      table.string('merchant');
      table.decimal('amount');
      table.date('date');
    })
    .createTable('budget', function (table) {
      table.increments();
      table.string('profileId').references('id').inTable('profiles');
    })
    .createTable('budgetCategories', function (table) {
      table.integer('budgetId').references('id').inTable('budget');
      table.integer('categoryId').references('id').inTable('categories');
      table.primary(['budgetId', 'categoryId']);
    })
    .createTable('goalProgress', function (table) {
      table.increments();
      table.string('profileId').references('id').inTable('profiles');
      table.decimal('totalSaved');
      table.date('totalSavedDate');
    });
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('budgetCategories')
    .dropTableIfExists('categories')
    .dropTableIfExists('budget')
    .dropTableIfExists('goalProgress')
    .dropTableIfExists('transactions')
    .dropTableIfExists('profiles');
};
