import "./CalorieRecordEdit.css";
export default function CaloriesRecordEdit() {
  return (
    <form>
      <label>Date: </label>
      <input type="date" />

      <label>Meal: </label>
      <select>
        <option value="Brealfast">Brealfast</option>
        <option value="Dinner">Dinner</option>
        <option value="Lunch">Lunch</option>
        <option value="Snack">Snack</option>
      </select>

      <label>Content: </label>
      <input type="text" />

      <label>Calories: </label>
      <input type="number" />
      <div className="footer">
        <button>Add Record</button>
      </div>
    </form>
  );
}
