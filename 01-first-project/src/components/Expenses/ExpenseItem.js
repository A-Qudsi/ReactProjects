import React from 'react'
import './ExpenseItem.css' 
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'


const ExpenseItem = (props) => {

  // const [title, setTitle] = useState(props.title); //returns array first value is inital, second value is a function with the changed element. We deconstruct to assign variable

  // // we use const because we are not assinging a new value using the = operator. the function handles that. so using const is fine. 

  // const clickHandler = () => {
  //   setTitle('Updated!');
  // };

    return (
      <li>
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
          </div>
          {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card>
      </li>
    );
}

export default ExpenseItem;