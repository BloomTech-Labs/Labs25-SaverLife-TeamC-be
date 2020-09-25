const express = require('express');
const router = express.Router();
const Transaction = require('./transactionModel');
const { isValidTransaction } = require('./transactionService');
const authRequired = require('../middleware/authRequired');

// create transaction
router.post('/', authRequired, (req, res) => {
  const transactionData = req.body;
  if (isValidTransaction(transactionData)) {
    Transaction.addTransaction(transactionData)
      .then((transaction) => {
        res.status(201).json(transaction);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: 'Failed to create new transaction',
        });
      });
  } else {
    res.status(400).json({
      message:
        'Please provide profile id, category id, merchant, amount, and date in the correct data type',
    });
  }
});

// read transaction by given transaction id
router.get('/:id', authRequired, (req, res) => {
  const { id } = req.params;
  Transaction.findTransactionById(id)
    .then((transaction) => {
      if (transaction) {
        res.status(200).json(transaction);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find transaction with given id' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err.message,
      });
    });
});

// find all transaction with given profile id
router.get('/profile/:profileId', authRequired, (req, res) => {
  const { profileId } = req.params;
  Transaction.findTransactionByProfileId(profileId)
    .then((transactions) => {
      if (transactions) {
        res.status(200).json(transactions);
      } else {
        res.status(404).json({ message: 'Could not find user with given id' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err.message,
      });
    });
});

// update transaction
router.put('/:id', authRequired, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Transaction.findTransactionById(id)
    .then((transaction) => {
      if (transaction) {
        Transaction.updateTransaction(changes, id).then(
          (updatedTransaction) => {
            res.status(200).json(updatedTransaction);
          }
        );
      } else {
        res
          .status(404)
          .json({ Error: 'Could not find transaction with given id' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'Failed to update transaction' });
    });
});

// delete transaction
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Transaction.removeTransaction(id)
    .then((deleted) => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: 'Could not find transaction with given id' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: 'failed to delete transaction' });
    });
});

module.exports = router;
