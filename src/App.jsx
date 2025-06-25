import CalorieRecord from "./Components/calorieRecordSection/CalorieRecord";

function App() {
  return (
    <div className="App">
      <CalorieRecord
        date={new Date(2023, 6, 24)}
        meal="breakfalst"
        calories={340}
        content="eggs"
      ></CalorieRecord>
      <CalorieRecord
        date={new Date(2021, 8, 4)}
        meal="breakfalst"
        calories={120}
        content="bread"
      ></CalorieRecord>
      <CalorieRecord
        date={new Date(2020, 1, 12)}
        meal="dinner"
        calories={890}
        content="meat"
      ></CalorieRecord>
      <CalorieRecord
        date={new Date(2019, 5, 10)}
        meal="lanch"
        calories={980}
        content="cheese"
      ></CalorieRecord>
    </div>
  );
}

export default App;
