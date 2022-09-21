import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

const NewExpense = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setIsActive(false);
  }

  const handleActive = () => {
    setIsActive(true)
  }

  const handleInActive = () => {
    setIsActive(false)
  }

  return (
    <div className='new-expense'>
      {!isActive && <button onClick={handleActive}>New Expense</button>}
      {isActive && <ExpenseForm onCancel={handleInActive} onSaveExpenseData={handleSaveExpenseData} />}
    </div>
  )
}

export default NewExpense
