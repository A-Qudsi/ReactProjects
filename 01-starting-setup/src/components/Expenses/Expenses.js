import React, { useState } from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpenseFilter from './ExpensesFilter'

const Expenses = (props) => {

    const [filteredYear, setFilterdYear] = useState('2020');

    const addYearSelected = (yearSelected) => {
        setFilterdYear(yearSelected)
    }

      const filteredExpensesYears = props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
      );

    return (
      <div>
        <Card className="expenses">
          <ExpenseFilter
            selected={filteredYear}
            onYearSelected={addYearSelected}
          />
          {filteredExpensesYears.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </Card>
      </div>
    );
}

export default Expenses