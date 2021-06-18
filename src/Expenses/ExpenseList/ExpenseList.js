import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card";

const ExpenseList = (props) => {
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === props.selectedYear;
  });
  let expenseItems = (
    <Card className="expenses">
      <h2 style={{ color: "#fff" }}>No expense items in this year</h2>
    </Card>
  );

  if (filteredExpenses.length) {
    expenseItems = filteredExpenses.map((expense) => {
      return (
        <div key={expense.id}>
          <Card className="expenses">
            <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
          </Card>
        </div>
      );
    });
  }

  return <div>{expenseItems}</div>;
};

export default ExpenseList;
