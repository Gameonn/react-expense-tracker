import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ExpenseChart from "./ExpenseChart/ExpenseChart";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseList/ExpenseList";

const Expenses = () => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);
  const [selectedYear, setSelectedYear] = useState("2021");
  const expenseButton = (
    <Card>
      <button onClick={() => setShowExpenseForm(true)}>Add New Expense</button>
    </Card>
  );
  const expenseList = [
    { id: "e1", title: "Some Books", date: new Date(2020, 2, 12), amount: 39 },
    { id: "e2", title: "Toilet Paper", date: new Date(2021, 7, 14), amount: 20 },
    { id: "e3", title: "Sports Kit", date: new Date(2021, 11, 5), amount: 55 },
    { id: "e4", title: "Swimming caps", date: new Date(2019, 12, 15), amount: 120 },
    { id: "e5", title: "Fitbit", date: new Date(2019, 2, 25), amount: 35 },
  ];
  const [expenses, setExpenses] = useState(expenseList);
  const year = [2019, 2020, 2021, 2022];

  const addExpenseHandler = (expense) => {
    if (expense.title) {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
      setSelectedYear(expense.date.getFullYear().toString());
      hideFormHandler();
    }
  };

  const hideFormHandler = () => setShowExpenseForm(false);

  const changeYearHandler = (e) => {
    const selected = e.target.value;
    setSelectedYear(selected);
  };

  return (
    <div>
      <div className="expenses">{showExpenseForm ? <ExpenseForm addExpense={addExpenseHandler} hideForm={hideFormHandler} /> : expenseButton}</div>
      <hr />
      <div className="expenses">
        <ExpenseChart expenses={expenses} selectedYear={selectedYear} />
      </div>

      <hr />
      <div className="expenses">
        <ExpenseFilter year={year} selectedYear={selectedYear} onChangeYear={changeYearHandler} />
      </div>
      <ExpenseList expenses={expenses} selectedYear={selectedYear} />
    </div>
  );
};

export default Expenses;
