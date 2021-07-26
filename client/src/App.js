import * as React from "react";
// import Locations from "./Components/Locations.js";
import TrainStops from "./TrainStops";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <h1> TrainStops </h1>
      <TrainStops />
      <Main />
      {/* <Locations /> */}
    </div>
  );
}

export default App;
