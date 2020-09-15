const db = require('../../data/db-config');

module.exports = {
  getGoalProgressById,
  findGoalProgressByProfileId,
  addGoalProgress,
  editGoalProgress,
  deleteGoalProgress,
  getTotalSaved,
};

// get goal progress by id
function getGoalProgressById(id) {
  return db('goal_progress').where({ id }).first();
}

// get goal progress by profile id
function findGoalProgressByProfileId(profile_id) {
  return db('goal_progress')
    .join('profiles', 'profiles.id', '=', 'goal_progress.profileId')
    .where({ profileId: profile_id });
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

// get the total goal progress
function getTotalSaved(profile_id) {
  return db('goal_progress')
    .join('profiles', 'profiles.id', '=', 'goal_progress.profileId')
    .where({ profileId: profile_id })
    .sum('singleAmount');
}
