const db = require('../../data/db-config');

module.exports = {
  getCategoryById,
  getCategoryByName,
  addCategory,
  updateCategory,
  deleteCategory,
};

//allow a user to read a specific budget line

function getCategoryById(id) {
  return db.select('*').from('categories').where({ id });
}

function getCategoryByName(inputName) {
  return db.select('id').from('categories').where({ name: inputName });
}

//allow a user to read all budget lines by budget id

//allow a user to create a budget line

function addCategory(data) {
  return db('categories')
    .insert(data)
    .then((ids) => {
      // return getLineById(ids[0])
      return ids;
    });
}

//update a given line
function updateCategory(changes, id) {
  return db('categories')
    .where({ id })
    .update(changes)
    .then((id) => {
      return getCategoryById(id);
    });
}

//delete a budget line
function deleteCategory(id) {
  return db('categories').where({ id }).del();
}
