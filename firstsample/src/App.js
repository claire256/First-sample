import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

const dummyExpenses = [
  {
    id : 1,
  title : 'transport',
  amount: 200,
  date: new Date(2022, 4, 13),
},
{
id : 2,
title : 'transport',
amount: 200,
date: new Date(2022, 4, 13),
},
{
id : 3,
title : 'transport',
amount: 200,
date: new Date(2022, 4, 13),
},
]

function App() {
  const[expenses, setExpenses] = useState(dummyExpenses)

  const addExpenseHandler = (expense)=>{
    console.log(expense)
    setExpenses((prevExpense)=>{
      return [expense, ...prevExpense]
    })
  }
  
  return (
    <div>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses item ={expenses} />
  </div>
  );
}

export default App;
