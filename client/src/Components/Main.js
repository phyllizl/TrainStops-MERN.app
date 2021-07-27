import { NoSsr } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

//This will be the landing page where you get: (a) MRT lines, which are (b) drop down lists that show all the stations in that line

const Main = () => {
  const history = useHistory();
  const [mrtStations, setMrtStations] = useState([]);
  let NS = [];
  let EW = [];
  let DT = [];
  let CC = [];
  let NE = [];
  let CG = [];
  let CE = [];

  const url = "/v1/mrt";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMrtStations(data));
    //console.log("data", mrtStations);
  }, []);

  if (mrtStations.length > 1) {
    //Get results for North South line
    NS = mrtStations.filter((stations) => stations.Station.includes("NS"));

    //Get results for East West line
    EW = mrtStations.filter((stations) => stations.Station.includes("EW"));

    //Get results for Downtown line
    DT = mrtStations.filter((stations) => stations.Station.includes("DT"));

    //Get results for Circle line
    CC = mrtStations.filter((stations) => stations.Station.includes("CC"));

    //Get results for North East line
    NE = mrtStations.filter((stations) => stations.Station.includes("NE"));

    //Get results for CG line (Changi Airport)
    CG = mrtStations.filter((stations) => stations.Station.includes("CG"));
    //Add this to EW line
    EW.push(CG[0], CG[1]);

    //Get results for CE line (Marina Bay)
    CE = mrtStations.filter((stations) => stations.Station.includes("CE"));
    //Add this to NS line
    NS.push(CE[0], CE[1]);
  }

  //create handleClick function to track selected mrt
  const handleClick = (event) => {
    event.preventDefault();
    const index = event.target.selectedIndex;
    const optionElement = event.target.childNodes[index];
    const optionElementId = optionElement.getAttribute("id");
    console.log(optionElementId);
    history.push(`/mrt/${optionElementId}`);
  };

  return (
    <div>
      <label for="EW"> East West Line </label>
      <br />
      <select id="EW" onChange={handleClick}>
        <option value="" disabled selected>Choose Station</option>
        {EW?.map((ele) => (
          <option key={ele?._id} id={ele?._id}>
            {ele?.["Station Name"]}
          </option>
        ))}
      </select>
      <br />

      <label for="NS"> North South Line </label>
      <br />
      <select id="NS" onChange={handleClick}>
        <option value="" disabled selected>Choose Station</option>
        {NS?.map((ele) => (
          <option key={ele?._id} id={ele?._id}>
            {" "}
            {ele?.["Station Name"]}{" "}
          </option>
        ))}
      </select>
      <br />

      <label for="DT"> Downtown Line </label>
      <br />
      <select id="DT" onChange={handleClick}>
        <option value="" disabled selected>Choose Station</option>
        {DT?.map((ele) => (
          <option key={ele?._id} id={ele?._id}>
            {" "}
            {ele?.["Station Name"]}{" "}
          </option>
        ))}
      </select>
      <br />

      <label for="CC"> Circle Line </label>
      <br />
      <select id="CC" onChange={handleClick}>
        <option value="" disabled selected>Choose Station</option>
        {CC?.map((ele) => (
          <option key={ele?._id} id={ele?._id}>
            {" "}
            {ele?.["Station Name"]}{" "}
          </option>
        ))}
      </select>
      <br />

      <label for="NE"> North East Line </label>
      <br />
      <select id="NE" onChange={handleClick}>
        <option value="" disabled selected>Choose Station</option>
        {NE?.map((ele) => (
          <option key={ele?._id} id={ele?._id}>
            {" "}
            {ele?.["Station Name"]}{" "}
          </option>
        ))}
      </select>
      <br />
    </div>
  );
};

export default Main;
