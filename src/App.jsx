import CalorieRecord from "./Components/calorieRecordSection/CalorieRecord";
import CaloriesRecordEdit from "./Components/edit/CaloriesRecordEdit";
import RecordList from "./Components/calorieRecordSection/RecordList";
import "./Components/calorieRecordSection/RecordList.css"; // move this to the top or after imports
import { useState } from "react";
const INITIAL_RECORDS = [
  {
    date: new Date(2023, 6, 24),
    meal: "breakfalst",
    calories: 340,
    content: "eggs",
  },
  {
    date: new Date(2023, 6, 24),
    meal: "breakfalst",
    calories: 340,
    content: "eggs",
  },
  {
    date: new Date(2023, 6, 24),
    meal: "breakfalst",
    calories: 340,
    content: "eggs",
  },
  {
    date: new Date(2023, 6, 24),
    meal: "breakfalst",
    calories: 340,
    content: "eggs",
  },
];
export default function App() {
  const [records, setRecords] = useState(INITIAL_RECORDS);

  const formSubmitHandler = function (record) {
    const foramtedRecord = {
      ...record,
      date: new Date(record.date),
    };
    setRecords([foramtedRecord, ...records]);
    console.log(record);
  };
  return (
    <div className="App">
      <h1>Welcome to React with Almdrasa!</h1>
      <CaloriesRecordEdit onFormSubmit={formSubmitHandler} />
      <RecordList records={records} />
    </div>
  );
}
