import "./CalorieRecord.css";
function CalorieRecord(props) {
  return (
    <ul className="record">
      <li>{props.date.toISOString()}</li>
      <li>{props.meal}</li>
      <li>{props.content}</li>

      <li className="record-calories">{props.calories}</li>
    </ul>
  );
}

export default CalorieRecord;
