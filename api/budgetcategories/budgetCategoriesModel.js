const db = require('../../data/db-config');
const { findById } = require('../profile/profileModel');

module.exports = {
  getLineById,
  getAllByBudget,
  addLine,
  updateLine,
  deleteLine,
};

//allow a user to read a specific budget line

function getLineById(id) {
  return db.select('*').from('budget_categories').where({ id });
}

//allow a user to read all budget lines by budget id

function getAllByBudget(budgetId) {
  return db.select('*').from('budget_categories').where({ budgetId });
}

//allow a user to create a budget line

function addLine(lineData) {
  return db('budget_categories')
    .insert(lineData)
    .then((ids) => {
      // return getLineById(ids[0])
      return ids;
    });
}

//update a given line
function updateLine(changes, id) {
  return db('budget_categories')
    .where({ id })
    .update(changes)
    .then((id) => {
      return getLineById(id);
    });
}

//delete a budget line
function deleteLine(id) {
  return db('budget_categories').where({ id }).del();
}
