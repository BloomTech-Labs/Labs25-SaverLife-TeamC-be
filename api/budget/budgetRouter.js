const express = require('express');

const Budget = require('./budgetModel');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: "Please try requesting using a budget id"})
})

//get a budget by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Budget.getBudgetById(id)
        .then((ret) => {
            res.status(200).json(ret)
        })
        .catch(() => {
            res.status(404).json({ message: 'Could not locate by budget id' });
          });
})

//create a budget
router.post('/', (req, res) => {
    const { data } = req.body;
    Budget.addBudget(data)
        .then(() => {
            res.status(201).json({ message: 'Entry succesfully created!' })
        })
        .catch(() => {
            res.status(500).json({ message: 'Failed to create budget' });
          });
})
//update a budget by id


//delete a budget by id

module.exports = router