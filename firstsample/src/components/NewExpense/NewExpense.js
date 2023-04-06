import React from 'react';
import ExpenseForm from './ExpenseForm'

const NewExpense = ()=>{

    const onSaveExpenseData = (enteredExpenseData)=>{
       const expenseData ={
           ...enteredExpenseData,
           id: Math.random().toString()
       }
    //    console.log('yy', expenseData)
    }
    
    return(
    <div>
    <ExpenseForm onSaveExpenseData={onSaveExpenseData}/>
    </div>
    )
}

export default NewExpense