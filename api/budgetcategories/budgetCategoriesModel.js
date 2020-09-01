const db = require('../../config/dsConfig.js')

module.exports = {
    getLineById,
    getAllByBudget,
    addLine,
    updateLine,
    deleteLine
}



//allow a user to read a specific budget line

function getLineById(id) {
    return db.select('*')
        .from('budgetCategories')
        .where({id})
}

//allow a user to read all budget lines by budget id

function getAllByBudget() {
    return null
}

//allow a user to create a budget line

function addLine() {
    return null
}

//update a given line
function updateLine() {
    return null
}

//delete a budget line 
function deleteLine() {
    return null
}