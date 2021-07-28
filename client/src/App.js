import React, { createContext, useState, useEffect } from "react";
import TrainStops from "./TrainStops";
import User from "./Components/User";
export const LoggedContext = createContext();
console.log("LoggedContext", LoggedContext);

function App() {
  const [logState, setLogState] = useState(null);

  //not sure how below one works....
  useEffect(() => {
    fetch("/v1/session")
      .then((res) => res.json())
      .then((data) => setLogState(data));
  }, []);

  return (
    <LoggedContext.Provider value={logState}>
      <div className="App">
        <h1> TrainStops </h1>
        {logState !== null ? logState._id : null}
        <User />
        <TrainStops setLogState={setLogState} />
      </div>
    </LoggedContext.Provider>
  );
}

export default App;
