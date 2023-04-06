import React, {useState} from 'react'
import ExpenseDate from "./ExpenseDate";


function ExpenseItem (props){

    const [title, setTitle] = useState(props.title)
    const handleClick = ()=>{
        setTitle('updated')
        console.log(title)
    }
    return (
    <div>
    <ExpenseDate dat ={props.date}/>
    <h2>{title}</h2>
    <h2>${props.amount}</h2>
    <button onClick={handleClick}>Change title</button>
    </div>
    )
}

export default ExpenseItem