import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    //This is fine however you could put it in 1 useState funciton since they all belong to the form and just changing the value

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })
    //Using 1 useState ^

    const titleChangeHandler = (event) => {
      setEnteredTitle(event.target.value)

      // you don't want to just leave it as just enteredTitle: event.target.value because it will replace the old state with the new one. the other two key value pairs will be lost. you have to make sure the other data does not get lost.

      // setUserInput({
      //     ...userInput,
      //     enteredTitle: event.target.value,
      // });

      //When we use the spread operator it copies the values of the original state object and then overides only the entertedTitle value.

      // However the way shown above can sometimes not work in niche cases because we depend on the previous state and just override one value however whenever we update state and depend on prev state you shouldn't do it like this we should call a function passing in a function into it.
      
    //   setUserInput((prevState) => {
    //         return { ...prevState, enteredTitle: event.target.value}
    //   });

      // In many cases both work fines however since react schedules state updates rather than performing them right away we could be depending on an outdated state if we are depending on the oldState often. If we use this approach react garauntees that the prevState is the most updated state.

      // We can always just use separate useState variables like in the first example, perfectly fine.
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: event.target.value };
        // });

    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value };
        // });
    }   

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        // if we had used separate useState variables 

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

        // To reset the fields to an empty string. and we put the value of the form as the initial state. This is called two way binding. Very important with forms. 
    }

    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type='button' onClick={props.closeForm}>Close</button>
          <button type="submit">Add New Expense</button>
        </div>
      </form>
    );
}

export default ExpenseForm;

      
