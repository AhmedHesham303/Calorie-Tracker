import "./RecordList.css";
import CalorieRecord from "./CalorieRecord.jsx";

export default function RecordList(props) {
  return (
    <ul className="record-list">
      <li>
        <CalorieRecord
          date={props.records[0].date}
          meal={props.records[0].meal}
          content={props.records[0].content}
          calories={props.records[0].calories}
        ></CalorieRecord>
      </li>
      <li>
        <CalorieRecord
          date={props.records[1].date}
          meal={props.records[1].meal}
          content={props.records[1].content}
          calories={props.records[1].calories}
        ></CalorieRecord>
      </li>
      <li>
        <CalorieRecord
          date={props.records[2].date}
          meal={props.records[2].meal}
          content={props.records[2].content}
          calories={props.records[2].calories}
        ></CalorieRecord>
      </li>
      <li>
        <CalorieRecord
          date={props.records[3].date}
          meal={props.records[3].meal}
          content={props.records[3].content}
          calories={props.records[3].calories}
        ></CalorieRecord>
      </li>
    </ul>
  );
}
