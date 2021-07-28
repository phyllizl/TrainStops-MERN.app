import { Route, Link, Switch } from "react-router-dom";
import Location from "./Components/Location";
import LogIn from "./Components/LogIn";
import Main from "./Components/Main";
import MrtStation from "./Components/MrtStation";
import SignUp from "./Components/SignUp";
//import User from "./Components/User";

const TrainStops = (props) => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
        <Link to="/login">
          <button>Log in</button>
        </Link>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </Route>

      {/* Route to Log In page */}
      <Route path="/login">
        <LogIn setLogState={props.setLogState} />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>

      {/* Route to MrtStation Page which shows Top 3 Hotspots */}
      <Route path="/mrt/:id">
        <MrtStation />
      </Route>

      {/* Route to Location(Hotspot) Page when user is logged in  */}
      <Route path="/location/:placeid">
        <Location />
      </Route>
    </Switch>
  );
};

export default TrainStops;
