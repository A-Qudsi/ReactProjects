import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from './Card'

function Expenses(props){

    return (
      <Card className="expenses">
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
    );
}

export default Expenses