import React,{useState} from 'react';


const ExpenseForm = (props)=>{
   
    const [userinput, setUserinput]= useState({
        title:'',
        amount:'',
        date:''
    })
    const inputHandler =(event)=>{
        setUserinput({...userinput, [event.target.name]: event.target.value})
        
    }
    
    const submitHandler =(event)=>{
        event.preventDefault()
        
        props.onSaveExpenseData(userinput)
       console.log(userinput)
       setUserinput({title:'', amount:'', date:''})
       
    }
    return(
        <div>
           <form onSubmit={submitHandler}>
               <div>
                   <label>Title</label>
                   <input type='title' name='title' value={userinput.title} onChange={inputHandler}/>
                   <label>Amount</label>
                   <input type='number' min="0.01" step="0.01" name='amount' value={userinput.amount} onChange={inputHandler}/>
                   <label>Date</label>
                   <input type='date' min="2019-01-01" max="2022-12-31" name='date' value={userinput.date} onChange={inputHandler}/>
               </div>
               <div>
                   <button type="submit">add item</button>
               </div>
           </form>
        </div>
    )
}

export default ExpenseForm