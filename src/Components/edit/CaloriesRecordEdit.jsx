import { useState } from "react";
import "./CalorieRecordEdit.css";
export default function CaloriesRecordEdit() {
  const [dateValue, setDateValue] = useState();
  const [mealValue, setMealValue] = useState();
  const [contentValue, setContentValue] = useState();
  const [caloriesValue, setCaloriesValue] = useState();
  const [mealRecord, setMealRecord] = useState({
    date: dateValue,
    calories: caloriesValue,
    content: contentValue,
    meal: mealValue,
  });
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
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="date">Date: </label>
      <input type="date" id="date" onChange={onChangeDateHandler} />

      <label htmlFor="meal">Meal: </label>
      <select id="meal" onChange={onChangeMealHandler}>
        <option value="Brealfast">Brealfast</option>
        <option value="Dinner">Dinner</option>
        <option value="Lunch">Lunch</option>
        <option value="Snack">Snack</option>
      </select>

      <label htmlFor="content">Content: </label>
      <input type="text" id="content" onChange={onChangeContentHandler} />

      <label htmlFor="calories">Calories: </label>
      <input type="number" id="calories" onChange={onChangeCaloriesHandler} />
      <div className="footer">
        <button>Add Record</button>
      </div>
    </form>
  );
}
