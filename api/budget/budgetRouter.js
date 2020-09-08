const express = require('express');
const authRequired = require('../middleware/authRequired');
const Budget = require('./budgetModel');
const router = express.Router();

router.get('/', authRequired, (req, res) => {
  res.json({ message: 'Please try requesting using a budget id' });
});

//get a budget by id
router.get('/:id', authRequired, (req, res) => {
  const { id } = req.params;
  Budget.getBudgetById(id)
    .then((ret) => {
      res.status(200).json(ret);
    })
    .catch(() => {
      res.status(404).json({ message: 'Could not locate by budget id' });
    });
});

//create a budget
router.post('/', authRequired, (req, res) => {
  const data = req.body;
  Budget.addBudget(data)
    .then((ret) => {
      res
        .status(201)
        .json({ return: ret, message: 'Entry succesfully created!' });
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to create budget' });
    });
});

//update a budget by id
router.put('/:id', authRequired, (req, res) => {
  const { id } = req.params;
  const data = req.body;
  Budget.getBudgetById(id)
    .then((budget) => {
      if (budget) {
        Budget.updateBudgetById(data, id).then((ret) => {
          res.json(ret);
        });
      } else {
        res.status(404).json({ message: 'Budget not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to update budget line' });
    });
});

//delete a budget by id
router.delete('/:id', authRequired, (req, res) => {
  const { id } = req.params;

  Budget.deleteBudgetById(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: 'Could not find budget with given id' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to delete budget' });
    });
});

module.exports = router;
