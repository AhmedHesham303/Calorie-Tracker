import "./CalorieDateRecord";
import StyledRecordCell from "./common/StyledRecordCell";
export default function CalorieDateRecord(props) {
  return (
    <StyledRecordCell className="record-date">
      <div className="record-date-month">{props.month}</div>
      <div className="record-date-day">{props.day}</div>
      <div className="record-date-year">{props.year}</div>
    </StyledRecordCell>
  );
}
