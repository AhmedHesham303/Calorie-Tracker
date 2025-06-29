import "./CalorieRecord.css";
import "./CalorieDateRecord.css";
import StyledRecordCell from "../common/StyledRecordCell";
import CalorieDateRecord from "./CalorieDateRecord";
import { useState } from "react";
export default function CalorieRecord(props) {
  let recordContent = (
    <>
      <li>{props.meal}</li>
      <li>{props.content}</li>
    </>
  );
  if (props.calories < 0) {
    recordContent = (
      <>
        <li></li>
        <li>Invalid calories</li>
      </>
    );
  }
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
      {recordContent}
      <li className="record-calories">
        <StyledRecordCell>{props.calories}</StyledRecordCell>
      </li>
    </ul>
  );
}
