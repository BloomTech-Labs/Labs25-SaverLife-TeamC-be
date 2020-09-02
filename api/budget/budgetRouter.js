const express = require('express');
const router = express.Router();
const Budget = require('./budgetModel');

// create budget for a category with given profile id

// read all budgets with profile Id
router.get('/:id/read', (req, res) => {
  const { id } = req.params;
  Budget.findBudgetByProfileId(id)
    .then((budget) => {
      res.status(200).json(budget);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err.message,
      });
    });
});

// update budget

// delete budget
