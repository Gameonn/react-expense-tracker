import ChartBar from "./ChartBar";
import "./ExpenseChart.css";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === props.selectedYear;
  });

  for (const expense of filteredExpenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  const dataPointValues = chartDataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {chartDataPoints.map((dataPoint, i) => (
        <ChartBar dataPoint={dataPoint} maxValue={totalMaximum} key={i} />
      ))}
    </div>
  );
};

export default ExpenseChart;
