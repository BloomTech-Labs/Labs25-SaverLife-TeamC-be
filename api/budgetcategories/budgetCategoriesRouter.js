const express = require('express')

const BudgetCategories = require('./budgetCategoriesModel')
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({ message: "Try asking for the id of the budget line you would like"});
});

// //allow a user to read a specific budget line
// router.get('/:id', (req, res) => {
//     const { id } = req.params;
//     BudgetCategories.getLineById(id)
//         .then(ret => {
//             res.json(ret)
//         })
//         .catch(err => {
//             res.status(404).json({message: 'Could not locate by id'})
//         })
// })


// //allow a user to read all budget lines by budget id
// router.get('/budgets/:budgetid', (req, res) => {
    
// })


//allow a user to create a budget line
router.post('/', (req, res) => {
    const lineData = req.body;

    BudgetCategories.addLine(lineData)
    .then(id => {
        res.status(201).json(id)
    })
    .catch(err => {
        res.status(500).json({message: "Failed to create budget line", error: err})
    });
});


// //update a given line
// router.put('/:id', (req, res) => {

// })

// //delete a budget line 
// router.delete('/:id', (req, res) => {

// })

module.exports = router;