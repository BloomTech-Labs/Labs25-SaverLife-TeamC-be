const db = require('../../data/db-config');

module.exports = {
    createBudgetByProfileId,
    findBudgetByProfileId,
}


function findBudgetByProfileId(profile_id){
    return db('budget').where({profile_id}).first();
}

