module.exports = {
    isValidTransaction,
}

function isValidTransaction(transaction){
    return Boolean(transaction.profileId && transaction.categoryId && transaction.merchant && transaction.amount && transaction.date)
}