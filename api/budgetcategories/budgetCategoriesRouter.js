const express = require('express');
const authRequired = require('../middleware/authRequired');
const BudgetCategories = require('./budgetCategoriesModel');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Try asking for the id of the budget line you would like',
  });
});

//allow a user to read a specific budget line
router.get('/:id', authRequired, (req, res) => {
  const { id } = req.params;
  BudgetCategories.getLineById(id)
    .then((ret) => {
      res.status(200).json(ret);
    })
    .catch(() => {
      res.status(404).json({ message: 'Could not locate by line id' });
    });
});

// //allow a user to read all budget lines by budget id
router.get('/budgets/:budgetId', authRequired, (req, res) => {
  const { budgetId } = req.params;
  BudgetCategories.getAllByBudget(budgetId)
    .then((ret) => {
      res.status(200).json(ret);
    })
    .catch(() => {
      res.status(404).json({ message: 'Could not locate by budget id' });
    });
});

//allow a user to create a budget line
router.post('/', authRequired, (req, res) => {
  const lineData = req.body;

  // does not return the id of the newly created entry
  BudgetCategories.addLine(lineData)
    .then(() => {
      res.status(201).json({ message: 'Entry succesfully created!' });
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to create budget line' });
    });
});

// //update a given line
router.put('/:id', authRequired, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  BudgetCategories.getLineById(id)
    .then((line) => {
      if (line) {
        BudgetCategories.updateLine(changes, id).then((ret) => {
          res.json(ret);
        });
      } else {
        res.status(404).json({ message: 'Line not found' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to update budget line' });
    });
});

// //delete a budget line
router.delete('/:id', authRequired, (req, res) => {
  const { id } = req.params;

  BudgetCategories.deleteLine(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find line with given id' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to delete scheme' });
    });
});

module.exports = router;
