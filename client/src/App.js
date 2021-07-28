import React, { createContext, useState, useEffect } from "react";
import TrainStops from "./TrainStops";
import Navbar from "./Components/Navbar";
import LogoutButton from "./Components/LogoutButton";
export const LoggedContext = createContext();

function App() {
  const [logState, setLogState] = useState(null);

  useEffect(() => {
    fetch("/v1/session")
      .then((res) => res.json())
      .then((data) => setLogState(data));
  }, []);

  return (
    <LoggedContext.Provider value={logState}>
      <div className="App">
        <Navbar />
        <h1> TrainStops </h1>
        {logState !== null ? (
          <a href={`/users/${logState._id}`}>{logState.username}</a>
        ) : null}
        <LogoutButton setLogState={setLogState} />
        <TrainStops logState={logState} setLogState={setLogState} />
      </div>
    </LoggedContext.Provider>
  );
}

export default App;
