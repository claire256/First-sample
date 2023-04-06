function ExpenseDate (props){
    const month = props.dat?.toLocaleString('en-US', {month: 'long'})
    const day = props.date?.toLocaleString('en-US', {day: '2-digit'})
    const year = props.date?.getFullYear();
    
    return(
    <div>
      <h2>{year}</h2>
      <h2>{month}</h2>
      <h2>{day}</h2>  
    </div>
    )
}

export default ExpenseDate;