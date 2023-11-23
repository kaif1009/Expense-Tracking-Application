const router=require('express').Router()
const {addIncome,getIncome,deleteIncome}=require('../controllers/income');
const {addExpense,getExpense,deleteExpense}=require('../controllers/expense');
router.post('/add-Income',addIncome)
    .get('/get-incomes',getIncome)
    .delete('/delete-incomes/:id',deleteIncome)
    .post('/add-expense',addExpense)
    .get('/get-expenses',getExpense)
    .delete('/delete-expenses/:id',deleteExpense)




module.exports=router