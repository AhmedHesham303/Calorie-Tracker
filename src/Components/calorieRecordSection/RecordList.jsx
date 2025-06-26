import "./RecordList.css";
import CalorieRecord from "./CalorieRecord.jsx";

export default function RecordList(props) {
  return (
    <ul className="record-list">
      {props.records.map((record, index) => (
        <li key={index}>
          <CalorieRecord
            date={record.date}
            meal={record.meal}
            content={record.content}
            calories={record.calories}
          />
        </li>
      ))}
    </ul>
  );
}
