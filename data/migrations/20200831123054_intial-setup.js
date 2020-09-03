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
      // table.string('profileId').references('id').inTable('profiles');
      table.string('profileId');
    })
    .createTable('budget_categories', function (table) {
      table.increments();
      table.integer('budgetId').references('id').inTable('budget');
      table.integer('categoryId').references('id').inTable('categories');
      table.decimal('amount');
    })
    .createTable('goal_progress', function (table) {
      table.increments();
      table.string('profileId').references('id').inTable('profiles');
      table.decimal('totalSaved');
      table.date('totalSavedDate');
    });
};

exports.down = (knex) => {
  return knex.schema
    .dropTableIfExists('budget_categories')
    .dropTableIfExists('transactions')
    .dropTableIfExists('categories')
    .dropTableIfExists('budget')
    .dropTableIfExists('goal_progress')
    .dropTableIfExists('profiles');
};
