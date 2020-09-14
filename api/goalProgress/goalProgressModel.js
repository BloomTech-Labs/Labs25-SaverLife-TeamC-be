const db = require('../../data/db-config');

module.exports = {
  getGoalProgressById,
  addGoalProgress,
  editGoalProgress,
  deleteGoalProgress,
};

// get goal progress by id
function getGoalProgressById(id) {
  return db('goal_progress').where({ id }).first();
}

// create a new goal progress
function addGoalProgress(gp) {
  return db('goal_progress').insert(gp).returning('*');
}

// update a goal progress
function editGoalProgress(changes, id) {
  return db('goal_progress')
    .where({ id })
    .update(changes)
    .then((id) => {
      return getGoalProgressById(id);
    });
}

// delete a goal progress
function deleteGoalProgress(id) {
  return db('goal_progress').where({ id }).del();
}
