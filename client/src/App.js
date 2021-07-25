import * as React from "react";
import logo from "./logo.svg";
import Locations from "./Components/Locations.js";
import TrainStops from "./TrainStops";

function App() {
  return (
    <div className="App">
      <h1> TrainStops </h1>
      <Locations />
      <TrainStops />
    </div>
  );
}

export default App;
