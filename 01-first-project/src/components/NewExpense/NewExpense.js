import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [buttonValue, setButtonValue] = useState(false)

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        closeForm();
    }

    const formHandler = () => {
        setButtonValue(true);
    }

    const closeForm = () => {
        setButtonValue(false)
    }

    if (!buttonValue) {
        return (
            <div className='new-expense'>
                <button onClick={formHandler}>Add New Expense</button>
            </div>
        )
    }

    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          closeButton={closeForm}
        />
      </div>
    );

}

export default NewExpense;