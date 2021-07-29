import React, { createContext, useState, useEffect } from "react";
import TrainStops from "./TrainStops";
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
        <TrainStops logState={logState} setLogState={setLogState} />


          <div className="content has-text-centered bottom">
            <img src="https://i.imgur.com/qnXvFki.png" alt="power by google" />
          </div>

      </div>
    </LoggedContext.Provider>
  );
}

export default App;
