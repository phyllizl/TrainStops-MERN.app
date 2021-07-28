import React, { createContext, useState, useEffect, } from "react";
import TrainStops from "./TrainStops";
export const LoggedContext = createContext();
console.log("LoggedContext", LoggedContext);

function App() {
  const [logState, setLogState] = useState();

  //not sure how below one works....
  useEffect(() => {
    fetch("/v1/users")
      .then((res) => res.json())
      .then((data) => setLogState(data));
  }, []);

  return (
    <LoggedContext.Provider value={logState}>
      <div className="App">
        <h1> TrainStops </h1>
        <TrainStops />
      </div>
    </LoggedContext.Provider>
  );
}

export default App;
