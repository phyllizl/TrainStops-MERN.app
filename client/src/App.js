import React, { createContext, useState, useEffect } from "react";
import TrainStops from "./TrainStops";
import LogoutButton from "./Components/LogoutButton";
export const LoggedContext = createContext();

function App() {
  const [logState, setLogState] = useState(null);

  useEffect(() => {
    fetch("/v1/users")
      .then((res) => res.json())
      .then((data) => setLogState(data));
  }, []);

  return (
    <LoggedContext.Provider value={logState}>
      <div className="App">
        <h1> TrainStops </h1>
        {logState ? logState._id : null}
        {logState ? logState.username : null}
        <LogoutButton setLogState={setLogState} />
        <TrainStops setLogState={setLogState} />
      </div>
    </LoggedContext.Provider>
  );
}

export default App;
