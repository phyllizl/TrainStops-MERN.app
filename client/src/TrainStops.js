import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Location from "./Components/Location";
import LogIn from "./Components/LogIn";
import Main from "./Components/Main";
import MrtStation from "./Components/MrtStation";
import SignUp from "./Components/SignUp";
import User from "./Components/User";

const TrainStops = () => {

    return(
        <Router>
            <Route exact path="/v1">
                <Main />
                <Link to="/v1/login">
                    <button>Log in</button>
                </Link>
                <Link to="/v1/signup">
                    <button>Sign up</button>
                </Link>
            </Route>

            {/* Route to Log In page */} 
            <Route exact path="/v1/login">
                <LogIn />
            </Route>

            <Route exact path="/v1/signup">
                <SignUp />
            </Route>

            {/* Route to MrtStation Page which shows Top 3 Hotspots */}
            <Route exact path="/v1/mrt/:id">
                <MrtStation />
            </Route>

            {/* Route to Location(Hotspot) Page when user is logged in  */}
            <Route exact path="/v1/users/:id">
                <Location />
            </Route>

            

            

        </Router>
    )
}

export default TrainStops;