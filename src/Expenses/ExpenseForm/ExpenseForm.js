import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const inputChangeHandler = (e) => {
    const fieldName = e.target.attributes.name.value;
    const fieldValue = e.target.value;

    if (fieldName === "title") setTitle(fieldValue);
    else if (fieldName === "amount") setAmount(fieldValue);
    else if (fieldName === "expenseDate") setExpenseDate(fieldValue);
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (title && amount && expenseDate) {
      const id = Math.random().toString(36).substring(3);
      props.addExpense({ id: id, title: title, amount: amount, date: new Date(expenseDate) });
    } else {
      alert("Fill in all input fields");
    }
  };

  return (
    <div className="new-expense">
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={inputChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" name="amount" step="0.5" value={amount} onChange={inputChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Expense Date</label>
            <input type="date" name="expenseDate" min="2019-05-01" max="2022-05-31" value={expenseDate} onChange={inputChangeHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit" onClick={formHandler}>
            {" "}
            Add Expense{" "}
          </button>
          <button onClick={props.hideForm}> Cancel </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
