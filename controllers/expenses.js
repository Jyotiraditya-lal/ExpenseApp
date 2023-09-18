const path= require('path')
const rootDir=require('../util/path');
const Expense = require('../models/expense');

exports.getExpense= (req,res,next) =>{
    res.sendFile( path.join(rootDir, 'views', 'expenseForm.html'))
};

exports.postExpense= async (req,res,next)=> {
    try{
        const title= req.body.title;
        const amount= req.body.amount;
        const price= req.body.price;
        console.log(title,amount)
        const data= await Expense.create({ 
            title: title,
            amount: amount,
            price: price
        })
        res.redirect('/')
        
    }
    catch(err){
        console.log(err)
    }  
}

exports.getExpenseData= async(req,res,next)=>{
    try{
        const expenses= await Expense.findAll()
        res.status(201).json({allexpenses: expenses})
    }catch(err) {
        console.log(err)
    }
}

exports.deleteExpenseData = async(req,res,next)=>{
    try{
        const Id = req.params.expenseId;
        await Expense.destroy({ where: { id: Id } });
        const expenses = await Expense.findAll();
        res.json({ allexpenses: expenses });
    }catch(err){
        console.log(err)
    }
}