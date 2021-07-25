import { BrowserRouter as Router, Route, Link, useHistory } from "react-router-dom";
import Location from "./Components/Location";
import LogIn from "./Components/LogIn";
import Main from "./Components/Main";
import MrtStation from "./Components/MrtStation";
import SignUp from "./Components/SignUp";
import User from "./Components/User";

const TrainStops = () => {

    return(
        <Router>
            <Main />

            {/* Route to MrtStation Page which shows Top 3 Hotspots */}
            <Route exact path="/:id">
                <MrtStation />
            </Route>

            {/* Route to Log In page */} 
            <Route exact path="/login">
                <LogIn />
            </Route>

            {/* Route to Location(Hotspot) Page when user is logged in  */}
            <Route exact path="/user/:id">
                <Location />
            </Route>

            <Link to="/login">
                <button>Log in</button>
            </Link>

        </Router>
    )
}

export default TrainStops;