const db = require('../../data/db-config');

module.exports = {
  getBudgetById,
  addBudget,
  updateBudgetById,
  deleteBudgetById,
  findBudgetByProfileId,
};

//get budget by id
function getBudgetById(id) {
  return db.select('*').from('budget').where({ id });
}

//create budget by id
function addBudget(data) {
  return db('budget')
    .insert(data)
    .then((ids) => {
      return ids;
    });
}
//edit budget by id
function updateBudgetById(changes, id) {
  return db('budget')
    .where({ id })
    .update(changes)
    .then((id) => {
      return getBudgetById(id);
    });
}
//delete budget
function deleteBudgetById(id) {
  return db('budget').where({ id }).del();
}

//get budget by profile id
function findBudgetByProfileId(profile_id) {
  return db('budget').where({ profile_id }).first();
}
