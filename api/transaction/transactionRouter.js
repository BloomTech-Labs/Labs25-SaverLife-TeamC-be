const express = require('express');
const router = express.Router();
const Transaction = require('./transactionModel');
const { isValidTransaction } = require('./transactionService');

// create transaction
router.post('/', (req, res) => {
  const transactionData = req.body;
  if (isValidTransaction(transactionData)){
    Transaction.addTransaction(transactionData)
    .then((transaction) => {
      res.status(201).json(transaction);
    }).catch((err) => {
      console.log(err);
      res.status(500).json({
        error: 'Failed to create new transaction',
      });
    });
  } else {
    res.status(400).json({
      message: "Please provide profile id, category id, merchant, amount, and date"
    })
  }
});

// read transaction by given transaction id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  Transaction.findTransactionById(id)
    .then((transaction) => {
      res.status(200).json(transaction);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err.message,
      });
    });
});

// find all transaction with given profile id
router.get('/profile/:profileId', (req, res) => {
  const { id } = req.param;
  Transaction.listTransactionByProfileId(id)
    .then((transactions) => {
      res.status(200).json(transactions);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err.message,
      });
    });
});

// update transaction
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Transaction.findTransactionById(id)
    .then((transaction) => {
      if (transaction) {
        Transaction.updateTransaction(changes, id).then(
          (updatedTransaction) => {
            res.json(updatedTransaction);
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
        res.json({ removed: deleted });
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
