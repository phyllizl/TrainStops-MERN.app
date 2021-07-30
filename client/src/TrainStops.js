import { Route, Switch } from "react-router-dom";
import Location from "./Components/Location";
import LogIn from "./Components/LogIn";
import Main from "./Components/Main";
import MrtStation from "./Components/MrtStation";
import SignUp from "./Components/SignUp";
import User from "./Components/User";
import { LoggedContext } from "./App";
import { useContext } from "react";
import LogoutButton from "./Components/LogoutButton";
import ReviewEdit from "./Components/ReviewEdit";

const TrainStops = (props) => {
  const loggedContext = useContext(LoggedContext);
  const toggle = () => {
    const navbarMenu = document.getElementById("nav-links");
    navbarMenu.classList.toggle("is-active");
  };

  return (
    <>
      <nav className="navbar has-shadow is-warning">
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img src="/favicon.svg" alt="Train Logo" />
          </a>
          {/* for mobile */}
          <div className="navbar-burger" id="burger" onClick={toggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="navbar-menu" id="nav-links">
          <div className="navbar-end">
            {loggedContext ? (
              <>
                {loggedContext !== null ? (
                  <a
                    className="navbar-item"
                    href={`/users/${props.logState._id}`}
                  >
                    Welcome, {loggedContext.username}!
                  </a>
                ) : null}
                <LogoutButton setLogState={props.setLogState} />
              </>
            ) : (
              <>
                <a href="/login" className="navbar-item">
                  Login
                </a>
                <a href="/signup" className="navbar-item">
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Main />
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
          <Location logState={props.logState} />
        </Route>

        {/* Route for user to edit review */}
        <Route path="/users/:userid/edit/:reviewid">
          <ReviewEdit />
        </Route>

        {/* Route to User Page when user is logged in  */}
        <Route path="/users/:userid">
          <User />
        </Route>
      </Switch>
    </>
  );
};

export default TrainStops;
