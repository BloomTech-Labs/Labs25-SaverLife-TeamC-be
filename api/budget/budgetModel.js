const db = require('../../data/db-config');

module.exports = {
    createBudgetByProfileId,
    findBudgetByProfileId,
}

function createBudgetByProfileId(profile_id){
    return db('')
}

function findBudgetByProfileId(profile_id){
    return db('budget').where({profile_id}).first();
}

