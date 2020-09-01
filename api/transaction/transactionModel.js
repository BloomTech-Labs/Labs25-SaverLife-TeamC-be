const db = require('../../data/db-config');

module.exports = {
  findTransactionById,
  findTransactionByProfileId,
  addTransaction,
  updateTransaction,
  removeTransaction,
};

function findTransactionById(id) {
  return db('transactions').where({ id }).first();
}

function findTransactionByProfileId(profile_id) {
  return db('transactions')
    .join('profiles', 'profiles.id', '=', 'transactions.profileId')
    .where({ profile_id: profile_id });
}

function addTransaction(transaction) {
  return db('transactions')
    .insert(transaction, 'id')
    .then((ids) => {
      return findTransactionById(ids[0]);
    });
}

function updateTransaction(changes, id) {
  return db('transactions').where({ id }).update(changes);
}

function removeTransaction(id) {
  return db('transactions').where({ id }).del();
}
