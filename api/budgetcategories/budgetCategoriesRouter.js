const express = require('express')

// const BudgetCategories = require('./budgetCategoriesModel')
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({ message: "nice job"});
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


// //allow a user to create a budget line
// router.post('/', (req, res) => {

// })


// //update a given line
// router.put('/:id', (req, res) => {

// })

// //delete a budget line 
// router.delete('/:id', (req, res) => {

// })

module.exports = router;