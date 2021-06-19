import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../../UI/Card";

const ExpenseList = ({ expenses, selectedYear }) => {
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  if (!filteredExpenses.length) {
    return (
      <Card className="expenses">
        <h2 style={{ color: "#fff" }}>No expense items in this year</h2>
      </Card>
    );
  }

  return (
    <div>
      {filteredExpenses.map((expense) => {
        return (
          <div key={expense.id}>
            <Card className="expenses">
              <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseList;
