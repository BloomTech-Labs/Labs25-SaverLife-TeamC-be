const db = require('../../data/db-config');

module.exports = {
    getBudgetById,
    addBudget,
    updateBudgetById,
    deleteBudgetById
}

//get budget by id
function getBudgetById(id) {
    return db.select('*')
        .from('budget')
        .where({id})
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
    return db('budgets')
        .where({id})
        .update(changes)
        .then((id) => {
            return getBudgetById(id);
        });
};
//delete budget
function deleteBudgetById(id) {
    return db('budget')
        .where({id})
        .del();
}