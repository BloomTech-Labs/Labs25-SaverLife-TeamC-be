const db = require('../../data/db-config')

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
        .from('budget_categories')
        .where({id})
}

//allow a user to read all budget lines by budget id

function getAllByBudget() {
    return null
}

//allow a user to create a budget line

function addLine(lineData) {
    return db('budget_categories')
        .insert(lineData)
        .then(ids => {
            // return getLineById(ids[0])
            return ids
            
            
        })
}

//update a given line
function updateLine() {
    return null
}

//delete a budget line 
function deleteLine() {
    return null
}