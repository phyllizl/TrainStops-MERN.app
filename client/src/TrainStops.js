import { Route, Link, Switch } from "react-router-dom";
import Location from "./Components/Location";
import LogIn from "./Components/LogIn";
import Main from "./Components/Main";
import MrtStation from "./Components/MrtStation";
import SignUp from "./Components/SignUp";
import User from "./Components/User";
import { LoggedContext } from "./App";
import { useContext } from "react";

const TrainStops = (props) => {
<<<<<<< HEAD
  const loggedContext = useContext(LoggedContext);
=======

  const toggle = () => {
    const burgerIcon = document.getElementById("burger");
    const navbarMenu = document.getElementById("nav-links");
    navbarMenu.classList.toggle("is-active");
  }
>>>>>>> 4bad0f7983f94d4c4443ce0e80f5b516e961b06c

  return (
    <>
    <nav class="navbar has-shadow is-warning">
      <div class="navbar-brand">
        <a href="/" class="navbar-item">
          <img src="./favicon.svg"/>
        </a>
      </div>

      {/* for mobile */}
      <a class="navbar-burger" id="burger" onClick={toggle}>
        <span></span>
        <span></span>
      </a>

      <div class="navbar-menu" id="nav-links">
         <div class="navbar-end">
           <a href="/login" class="navbar-item">Login</a>
           <a href="/signup" class="navbar-item">Sign Up</a>
        </div>
      </div>
    </nav>

    <Switch>
      <Route exact path="/">
        <Main />
<<<<<<< HEAD
        {loggedContext ? (
          <div></div>
        ) : (
          <>
            <Link to="/login">
              <button>Log in</button>
            </Link>
            <Link to="/signup">
              <button>Sign up</button>
            </Link>
          </>
        )}
=======
>>>>>>> 4bad0f7983f94d4c4443ce0e80f5b516e961b06c
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

      {/* Route to User Page when user is logged in  */}
      <Route path="/users/:userid">
        <User />
      </Route>
    </Switch>
    </>
  );
};

export default TrainStops;
