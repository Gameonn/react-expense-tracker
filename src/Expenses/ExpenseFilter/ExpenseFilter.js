import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={props.onChangeYear} value={props.selectedYear}>
          <option value="" disabled>
            All
          </option>
          {props.year.map((y, i) => {
            return (
              <option key={i} value={y}>
                {y}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
