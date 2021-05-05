import React, { useState } from 'react'
import './Expenses.css'
import ExpensesList from './ExpensesList'
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
          <ExpensesList expenses={filteredExpensesYears} />
        </Card>
      </div>
    );
}

export default Expenses