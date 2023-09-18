const expense= require('../controllers/expenses')
const express= require('express')

const router= express.Router()

router.get('/', expense.getExpense)
router.post('/get-expense',expense.postExpense)
router.get('/get-expense',expense.getExpenseData)
router.delete('/delete-expense/:expenseId',expense.deleteExpenseData)


module.exports= router