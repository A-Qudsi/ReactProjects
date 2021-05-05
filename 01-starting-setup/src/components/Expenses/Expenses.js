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

    return (
      <div>
        <Card className="expenses">
          <ExpenseFilter
            selected={filteredYear}
            onYearSelected={addYearSelected}
          />
          {props.expenses
            ? props.expenses.map((expense) => {
                return (
                  <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                  />
                );
              })
            : null}
        </Card>
      </div>
    );
}

export default Expenses