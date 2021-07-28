import React, { createContext, useState, useEffect, } from "react";
import { Route, Link, Switch } from "react-router-dom";
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
<<<<<<< HEAD
        <Navbar />
        <h1> TrainStops </h1>
=======
      <TrainStops logState={logState} setLogState={setLogState} />
>>>>>>> 4bad0f7983f94d4c4443ce0e80f5b516e961b06c
        {logState !== null ? (
          <a href={`/users/${logState._id}`}>{logState.username}</a>
        ) : null}
        <LogoutButton setLogState={setLogState} />
        
      </div>
    </LoggedContext.Provider>
  );
}

export default App;
