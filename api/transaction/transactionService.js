module.exports = {
  isValidTransaction,
};

function isValidTransaction(transaction) {
  let dataExist = Boolean(
    transaction.profileId &&
      transaction.categoryId &&
      transaction.merchant &&
      transaction.amount &&
      transaction.date
  );
  let profileId_is_string = typeof transaction.profileId === 'string';
  let categoryId_is_number = typeof transaction.categoryId === 'number';
  let merchant_is_string = typeof transaction.merchant === 'string';
  let amount_is_number = typeof transaction.amount === 'number';

  let passing = Boolean(
    dataExist &&
      profileId_is_string &&
      categoryId_is_number &&
      merchant_is_string &&
      amount_is_number
  );

  return passing;
}
