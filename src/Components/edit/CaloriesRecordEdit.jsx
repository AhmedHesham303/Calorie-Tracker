import { useState } from "react";
import "./CalorieRecordEdit.css";
export default function CaloriesRecordEdit(props) {
  const [dateValue, setDateValue] = useState();
  const [mealValue, setMealValue] = useState();
  const [contentValue, setContentValue] = useState();
  const [caloriesValue, setCaloriesValue] = useState();
  const DEFAULT_VALUE = {
    date: "",
    calories: 0,
    content: "",
    meal: "Breakfast",
  };
  const [mealRecord, setMealRecord] = useState(DEFAULT_VALUE);
  const onChangeDateHandler = function (event) {
    setMealRecord({
      ...mealRecord,
      date: event.target.value,
    });
  };
  const onChangeMealHandler = function (event) {
    setMealRecord({
      ...mealRecord,
      meal: event.target.value,
    });
  };
  const onChangeCaloriesHandler = function (event) {
    setMealRecord({
      ...mealRecord,
      calories: event.target.value,
    });
  };
  const onChangeContentHandler = function (event) {
    setMealRecord({
      ...mealRecord,
      content: event.target.value,
    });
  };
  const onSubmitHandler = function (event) {
    event.preventDefault();
    props.onFormSubmit(mealRecord);
    setMealRecord(DEFAULT_VALUE);
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="date">Date: </label>
      <input
        type="date"
        id="date"
        value={mealRecord.date}
        onChange={onChangeDateHandler}
      />

      <label htmlFor="meal">Meal: </label>
      <select id="meal" value={mealRecord.meal} onChange={onChangeMealHandler}>
        <option value="Brealfast">Brealfast</option>
        <option value="Dinner">Dinner</option>
        <option value="Lunch">Lunch</option>
        <option value="Snack">Snack</option>
      </select>

      <label htmlFor="content">Content: </label>
      <input
        type="text"
        value={mealRecord.content}
        id="content"
        onChange={onChangeContentHandler}
      />

      <label htmlFor="calories">Calories: </label>
      <input
        type="number"
        id="calories"
        value={mealRecord.calories}
        onChange={onChangeCaloriesHandler}
        style={
          mealRecord.calories < 0
            ? {
                border: "1px solid red",
                backgroundColor: "white",
                color: "red",
              }
            : {}
        }
      />
      <div className="footer">
        <button>Add Record</button>
      </div>
    </form>
  );
}
