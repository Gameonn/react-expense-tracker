// import React, { useState } from "react";
import Card from "../../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const expenseMonth = props.date.toLocaleString("default", { month: "long" });
  const expenseYear = props.date.getFullYear();
  const expenseDay = props.date.getDate();

  return (
    <Card className="expense-item">
      <div className="expense-date">
        <div className="expense-date__month">{expenseMonth}</div>
        <div className="expense-date__year">{expenseYear}</div>
        <div className="expense-date__day">{expenseDay}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
