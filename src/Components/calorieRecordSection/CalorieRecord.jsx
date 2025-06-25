import "./CalorieRecord.css";
import "./CalorieDateRecord.css";
import StyledRecordCell from "../common/StyledRecordCell";
import CalorieDateRecord from "./CalorieDateRecord";
function CalorieRecord(props) {
  const month = props.date.toLocaleString("default", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.getDate();
  return (
    <ul className="record">
      <li>
        <CalorieDateRecord
          month={month}
          year={year}
          day={day}
        ></CalorieDateRecord>
      </li>
      <li>{props.meal}</li>
      <li>{props.content}</li>

      <li className="record-calories">
        <StyledRecordCell>{props.calories}</StyledRecordCell>
      </li>
    </ul>
  );
}

export default CalorieRecord;
