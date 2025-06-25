import CalorieRecord from "./Components/calorieRecordSection/CalorieRecord";
// import CaloriesRecordEdit from "../edit/CaloriesRecordEdit";
import RecordList from "./Components/calorieRecordSection/RecordList";
import "./Components/calorieRecordSection/RecordList.css"; // move this to the top or after imports

export default function App() {
  const records = [
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
  return (
    <div className="App">
      <h1>Welcome to React with Almdrasa!</h1>
      <RecordList records={records} />
    </div>
  );
}
